from rest_framework import serializers
from .models import DeckFromExcel

class DeckFromExcelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = DeckFromExcel
        fields = ('pk', 'setId', 'nome', 'isBasedDeck', 'isSpeedDuel', 'setType', 'setCode')