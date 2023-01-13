from django.db import models
import requests
import json
from main import settings

# Create your models here.
class Utils():
    
  def do_login():
       path_login = settings.GLOBAL_SETTINGS['CARDS_MAIN_API']+'/auth/login'
       credentials = {'username':'alannaicson','password':'91628319'}
       login = requests.post(path_login, json=credentials)
       data = login.json()
       token = data['accessToken']
       return 'Bearer '+token  