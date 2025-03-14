from rest_framework import serializers

from .models import EnergyTypes

from .models import PokemonTypes
from .models import Attack, Card

class AttackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attack
        fields = ['id', 'name', 'description', 'hit_point', 'cost']
        
    def create(self, validated_data):
        return super().create(validated_data)   
class EnergyTypesSerialize(serializers.ModelSerializer):
    class Meta:
        model = EnergyTypes
        fields = '__all__'
        
    # def create(self, validated_data):
    #     return super().create(validated_data)   

class CardSerializer(serializers.ModelSerializer):
    attack = AttackSerializer(many=True)
    # pokemon_type = EnergyTypesSerialize()
    class Meta:
        model = Card
        fields = ['id', 'number', 'api_id', 'image_small', 'image_large', 'card_name', 'pokemon_type', 'hp', 'stage', 'ex_rule', 
                  'weakness', 'resistance', 'retreat', 'pokemon_description', 'ability_name', 'ability_description', 'attack', 'pokemon_id']
        
    def create(self, validated_data):
        attacks_data = validated_data.pop('attack', [])
        card = Card.objects.create(**validated_data)
        
        for attack_data in attacks_data:
            attack = AttackSerializer().create(attack_data)
            card.attack.add(attack)
        
        return card

class CardSimpleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Card
        fields = ['id', 'image_small', 'own_this_card']

class CardSerializerGET(serializers.ModelSerializer):
    pokemon_type = EnergyTypesSerialize()
    attack = AttackSerializer(many=True)
    
    class Meta:
        model = Card
        fields = '__all__'
