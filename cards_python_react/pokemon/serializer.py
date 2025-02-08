from rest_framework import serializers
from .models import Pokemon

class PokemonSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Pokemon
        fields = ('id', 'name', 'evolves_from', 'evolves_to', 'img', 'type', 'species', 'height', 'weight', 'hp', 'attack', 'defense', 'sp_atk', 'sp_def', 'speed' )