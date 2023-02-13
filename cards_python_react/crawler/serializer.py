from rest_framework import serializers
from .models import Crawler

class CrawlerSerializer(serializers.ModelSerializer):
     class Meta:
          model = Crawler
          fields = ('setId', 'url')