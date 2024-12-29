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
    

        