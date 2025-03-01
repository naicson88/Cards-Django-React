

from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Crawler
from .serializer import *
from rest_framework.response import Response
from rest_framework import status
from scrapy.crawler import CrawlerProcess, CrawlerRunner
from scrapy.utils.project import get_project_settings
from .crawler import DeckCrawler
import logging
from twisted.internet import defer
from twisted.internet.threads import deferToThread
import os
import subprocess
import json


# Configuração de logging para o Scrapy
logging.basicConfig(level=logging.INFO)

@api_view(['POST'])
def create_deck (request):
    serializer = CrawlerSerializer(data=request.data)
    if serializer.is_valid():
        deck = Crawler.teste(serializer)
        
       # serializer.save()
        return Response(data=deck, status=status.HTTP_201_CREATED)
    
    return Response( serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_new_pokemon_infos (request):
    # serializer = CrawlerSerializer(data=request.data)
    # if serializer.is_valid():
    #     deck = Crawler.teste(serializer)
    # print("Diretório atual:", os.getcwd())
    # os.chdir('/crawler')
   # subprocess.run("scrapy runspider crawler.py -O pkm.json") 

    os.system("scrapy runspider crawler/crawler.py -O pkm.json")
    with open('pkm.json') as f:
        data = json.load(f)
    
    # def run_spider():
    #     logging.info("AAAAAAAAAAAA")
    #     runner = CrawlerRunner(get_project_settings()) #CrawlerProcess(get_project_settings())    
    
    #     @defer.inlineCallbacks
    #     def crawl():
    #             logging.info("BBBBBBBBBBBBBBBBB")
    #             yield runner.crawl(DeckCrawler)
    #             logging.info("Spider completed!")
                
    #     logging.info("CCCCCCCCCCCCCC")
    #     crawl()   
        
    # deferToThread(run_spider())    
    #return "Spider completed!"
    return Response(data=data[0], status=status.HTTP_201_CREATED)
    
    #return Response( serializer.errors, status=status.HTTP_400_BAD_REQUEST)

