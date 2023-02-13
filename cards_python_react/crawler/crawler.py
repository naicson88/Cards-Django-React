import scrapy

class DeckCrawler(scrapy.Spider):
    
    def __str__(self):
        return self
    
    name = 'collection_deck'
    allowed_domains = ['yugipedia.com']
    start_urls  = ['https://yugipedia.com/wiki/Battle_Pack:_Epic_Dawn']
    
    def parse(self, response):
        
        for infos in response.css('.wikitable tr'):
            print('entrou')
            yield{
                'setcode': infos.css('td:nth-child(1) a::text').get(),
                'quantity': infos.css('td:nth-child(6)::text').get()        
                }
            pass