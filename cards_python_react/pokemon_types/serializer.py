from rest_framework import serializers
from .models import PokemonTypes

class PokemonTypesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = PokemonTypes
        fields = '__all__'