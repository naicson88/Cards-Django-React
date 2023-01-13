from django.db import models
from utils.models import Utils
from main.settings import GLOBAL_SETTINGS
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
    
    def read_excel():
        excel_data = pandas.read_excel(GLOBAL_SETTINGS['EXCEL_PATH'])
        data_json = excel_data.to_json(orient='records')
        return json.loads(data_json)
    
    def excel_deck(deck_serialized):
        token = Utils.do_login()       
        cards = DeckFromExcel.read_excel()
        
        for card in cards:
            api_data = requests.get(GLOBAL_SETTINGS['YUGIOH_API']+'name='+card['name'].strip())
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
       