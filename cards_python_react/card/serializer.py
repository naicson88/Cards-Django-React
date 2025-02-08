from rest_framework import serializers
from .models import Attack, Card

class AttackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attack
        fields = ['id', 'name', 'description', 'hit_point', 'cost']
        
    def create(self, validated_data):
        return super().create(validated_data)    

class CardSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Card
        fields = ['id', 'number', 'card_name', 'pokemon_type', 'hp', 'stage', 'ex_rule', 
                  'weakness', 'resistance', 'retreat', 'pokemon_description', 'ability_name', 'ability_description', 'attack', 'pokemon']
        
    def create(self, validated_data):
        attacks_data = validated_data.pop('attack', [])
        card = Card.objects.create(**validated_data)
        
        for attack_data in attacks_data:
            attack = AttackSerializer().create(attack_data)
            card.attack.add(attack)
        
        return card
