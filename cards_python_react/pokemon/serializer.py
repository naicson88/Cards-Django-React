from rest_framework import serializers
from .models import Pokemon

class PokemonSerializer(serializers.ModelSerializer):
    evolves_from_details = serializers.SerializerMethodField() 
    
    class Meta:
        model = Pokemon
        fields = ('id', 'name', 'evolves_from', 'evolves_from_details', 'evolves_to', 'img', 'type', 'species', 'height', 'weight', 'hp', 'attack', 'defense', 'sp_atk', 'sp_def', 'speed' )
    
    def get_evolves_from_details(self, obj):
        # Retorna os dados completos do Pokémon relacionado em "evolves_from"
        if obj.evolves_from:
            return PokemonSerializer(obj.evolves_from).data  # Serializa o objeto "evolves_from" completamente
        return None  # Se não houver "evolves_from", retorna None 