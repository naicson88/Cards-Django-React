import scrapy
import logging
    


# COMANDO PARA RODAR: scrapy runspider crawler.py
# Roda e cria um JSON scrapy runspider crawler.py -o pkm.json
# Pode copiar xpath do html ao inves das classes
class DeckCrawler(scrapy.Spider):
    
    name = 'collection_deck'
    allowed_domains = ['pokemondb.net']
    #start_urls  = ['https://pokemondb.net/pokedex/scyther']
    
    
    def start_requests(self):
        url = 'https://pokemondb.net/pokedex/slowbro'
        
        logging.info("Iniciando as requisições...")
        yield scrapy.Request(url, callback=self.parse)

    def parse(self, response, **kwargs):
        
        name = response.xpath('/html/body/main/h1/text()').get()
        id = response.xpath('/html/body/main/div[2]/div[2]/div/div[1]/div[2]/table/tbody/tr[1]/td/strong/text()').get()
        species = response.xpath('/html/body/main/div[2]/div[2]/div/div[1]/div[2]/table/tbody/tr[3]/td/text()').get()
        image =  response.xpath('/html/body/main/div[2]/div[2]/div/div[1]/div[1]/p[1]/a/@href').extract()[0]
        type1 = response.xpath('/html/body/main/div[2]/div[2]/div/div[1]/div[2]/table/tbody/tr[2]/td/a[1]/text()').get()
        type2 = response.xpath('/html/body/main/div[2]/div[2]/div/div[1]/div[2]/table/tbody/tr[2]/td/a[2]/text()').get()
        height = response.xpath('/html/body/main/div[2]/div[2]/div/div[1]/div[2]/table/tbody/tr[4]/td/text()').get()
        weight = response.xpath('/html/body/main/div[2]/div[2]/div/div[1]/div[2]/table/tbody/tr[5]/td/text()').get()
        hp = response.xpath('/html/body/main/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[1]/td[1]/text()').get()
        attack = response.xpath('/html/body/main/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[2]/td[1]/text()').get()
        defense = response.xpath('/html/body/main/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[3]/td[1]/text()').get()
        sp_atk = response.xpath('/html/body/main/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[4]/td[1]/text()').get()
        sp_def = response.xpath('/html/body/main/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[5]/td[1]/text()').get()
        speed = response.xpath('/html/body/main/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[6]/td[1]/text()').get()
        
        yield  {
                'name': name,
                'id': id,
                'species': species,
                'type1': type1,
                'type2' : type2,
                'img' : image,
                'height': height,
                'weight': weight,
                'hp': hp,
                'attack':attack, 
                'defense' : defense,
                'sp_atk' : sp_atk,
                'sp_def' : sp_def,
                'speed' : speed
            }       
        # for infos in response.css('.vitals-table tr'):
        #     print('entrou')
        #     print(infos)
        #     yield{
        #         'setcode': infos.css('td:nth-child(1) a::text').get(),
        #         'quantity': infos.css('td:nth-child(6)::text').get()        
        #         }
        #     pass
