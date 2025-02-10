from rest_framework import serializers

from pokemon_types.serializer import PokemonTypesSerializer
from .models import Pokemon

class PokemonSerializer(serializers.ModelSerializer):
    evolves_from_details = serializers.SerializerMethodField()
    type = PokemonTypesSerializer(many=True)  # Isso inclui todos os objetos de tipo na resposta JSON

    
    class Meta:
        model = Pokemon
        fields = '__all__'
    
    def get_evolves_from_details(self, obj):
        # Retorna os dados completos do Pokémon relacionado em "evolves_from"
        if obj.evolves_from:
            return PokemonSerializer(obj.evolves_from).data  # Serializa o objeto "evolves_from" completamente
        return None  # Se não houver "evolves_from", retorna None 