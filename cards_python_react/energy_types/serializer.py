from rest_framework import serializers
from .models import EnergyTypes

class EnergyTypesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = EnergyTypes
        fields = ('id', 'name', 'img')