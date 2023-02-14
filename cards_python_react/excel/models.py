from django.db import models
from utils.models import Utils
from main.settings import GLOBAL_SETTINGS
from django.http import JsonResponse
from django.forms.models import model_to_dict
import urllib.parse
import pandas
import requests
import re
import json
import time
import sys

sys.path.append(".")
# Create your models here.
class DeckFromExcel(models.Model):
    setId = models.IntegerField()
    nome = models.CharField(blank=False, null=False, max_length=100)
    isBasedDeck = models.BooleanField(blank=False, null=False)
    isSpeedDuel = models.BooleanField(blank=False, null=False)
    setType = models.CharField(blank=False, null=False, max_length=20)
    setCode = models.CharField(blank=False, null=False, max_length=20)

    def __str__(self):
        return self.nome
    
    def read_excel(path):
        excel_data = pandas.read_excel(path)
        data_json = excel_data.to_json(orient='records')
        return json.loads(data_json)
    
    def excel_deck(deck_serialized):
        token = Utils.do_login()       
        cards = DeckFromExcel.read_excel(GLOBAL_SETTINGS['EXCEL_PATH'])
        
        for card in cards:
             if(card['cardNumber'] == None):
                query = urllib.parse.quote(card['name'].strip())
                api_data = requests.get(GLOBAL_SETTINGS['YUGIOH_API']+'name='+query)
                number = api_data.json()['data'][0]['id']
                time.sleep(1)
                card['cardNumber'] = number
                print(card)    
        
        dto = {
            "setId": deck_serialized['setId'].value,
            "nome": deck_serialized['nome'].value,
            "isBasedDeck": deck_serialized['isBasedDeck'].value,
            "isSpeedDuel": deck_serialized['isSpeedDuel'].value,
            "setType": deck_serialized['setType'].value,
            "setCode": deck_serialized['setCode'].value,
            "relDeckCards": cards
        }
        #print(dto)
        response = requests.post(GLOBAL_SETTINGS['CARDS_ADMIN_API']+'/deck/new-deck-collection-yugipedia', headers={"Authorization": token}, json=dto)
        print(response)
    
        return dto
    
    def read_name_excel(deck_serialized):
        excel = DeckFromExcel.read_excel(GLOBAL_SETTINGS['EXCEL_PATH_NAMES'])
        list_rel = [];
        
        for nome in excel:
            try:
              query = urllib.parse.quote(nome['name'].strip())
   
           
              api_data = requests.get(GLOBAL_SETTINGS['YUGIOH_API']+'name='+query)   
              card = api_data.json()['data'][0]
  
              for rel in card['card_sets']:
                if rel['set_name'] == deck_serialized['nome'].value:
                    rel_obj = {
                        "cardNumber" :card.get('id'),
                        "cardSetCode" : rel['set_code'],
                        "card_raridade" :rel['set_rarity'],
                        "card_price" :rel['set_price'],
                        "isSideDeck" :False,
                        "isSpeedDuel" :deck_serialized['isSpeedDuel'].value,
                        "setRarityCode" :rel['set_rarity_code'],
                        "rarityDetails" :rel['set_rarity'],
                    }
                    
                    list_rel.append(rel_obj)
                    
            except:
                print("Erro card: ", nome['name'])
                
        json_list = json.dumps(list_rel)
        
        obj = {
            "setId": deck_serialized['setId'].value,
            "nome": deck_serialized['nome'].value,
            "isBasedDeck": deck_serialized['isBasedDeck'].value,
            "isSpeedDuel": deck_serialized['isSpeedDuel'].value,
            "setType": deck_serialized['setType'].value,
            "setCode": deck_serialized['setCode'].value,
            "relDeckCards": json.loads(json_list)
        }

        return obj
           

       