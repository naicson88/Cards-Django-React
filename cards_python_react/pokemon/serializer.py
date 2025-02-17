from rest_framework import serializers

from .models import PokemonTypes
from pokemon_types.serializer import PokemonTypesSerializer
from .models import Pokemon

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = '__all__'
       
class PokemonSerializerGET(serializers.ModelSerializer):
    type = PokemonTypesSerializer(many=True)  # Isso inclui todos os objetos de tipo na resposta JSON
    
    class Meta:
        model = Pokemon
        fields = '__all__'