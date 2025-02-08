from django.db import models

from pokemon_types.models import PokemonTypes
from pokemon.models import Pokemon

class Attack(models.Model):
      id = models.BigAutoField(auto_created=True, primary_key=True, serialize=True, verbose_name='ID')
      name = models.CharField(blank=True, null=True, max_length=100, unique=False)
      description = models.CharField(blank=True, null=True, max_length=455, unique=False)
      hit_point = models.SmallIntegerField()
      cost = models.CharField(blank=True, null=True, max_length=50, unique=False)
      
      
      def __str__(self):
        return self.name
    
# Create your models here.
class Card(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=True, verbose_name='ID')
    number = models.CharField(blank=False, null=False, max_length=100, unique=False)
    pokemon = models.ManyToManyField(Pokemon, related_name='cards')
    card_name = models.CharField(blank=False, null=False, max_length=100, unique=False)
    pokemon_type = models.ManyToOneRel(PokemonTypes, related_name='type')
    hp = models.SmallIntegerField()
    stage = models.CharField(blank=True, null=True, max_length=50, unique=False)
    ex_rule = models.CharField(blank=True, null=True, max_length=455, unique=False)
    weakness = models.CharField(blank=True, null=True, max_length=50, unique=False)
    resistance = models.CharField(blank=True, null=True, max_length=50, unique=False)
    retreat = models.CharField(blank=True, null=True, max_length=50, unique=False)
    pokemon_description = models.CharField(blank=True, null=True, max_length=50, unique=False)
    ability_name = models.CharField(blank=True, null=True, max_length=50, unique=False)
    ability_description = models.CharField(blank=True, null=True, max_length=450, unique=False)
    attack = models.ManyToManyField(Attack, related_name='attack', blank=True, null=True)
    
    
    def __str__(self):
        return self.card_name
    


    
    
    
    