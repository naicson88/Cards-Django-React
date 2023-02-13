from django.db import models
from utils.models import Utils
from main.settings import GLOBAL_SETTINGS
import scrapy

# Create your models here.

class Crawler(models.Model):
    setId = models.IntegerField()
    url = models.CharField(blank=False, null=False, max_length=255)
    
    def __str__(self):
        return self.url
    
    def teste(serialized):
        print(serialized)
    
class DeckCrawler(scrapy.Spider):
    
    def __str__(self):
        return self
    
    name = 'collection_deck'
    allowed_domains = ['yugipedia.com']
    start_urls = 'https://yugipedia.com/wiki/Battle_Pack:_Epic_Dawn'
    
    def parse(self, response):
        for infos in response.css('.wikitable tr'):
            yield{
                'setcode': infos.css('td:nth-child(1) a::text').get(),
                'quantity': infos.css('td:nth-child(6)::text').get()        
            }
            pass
        