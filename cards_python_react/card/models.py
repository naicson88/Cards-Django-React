from django.db import models

from energy_types.models import EnergyTypes
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
    api_id = models.CharField(blank=True, null=True, max_length=100, unique=False)
    number = models.CharField(blank=False, null=False, max_length=100, unique=False)
    image_small = models.CharField(blank=True, null=True, max_length=200, unique=False)
    image_large = models.CharField(blank=True, null=True, max_length=200, unique=False)
    pokemon_id = models.ForeignKey(Pokemon, on_delete=models.CASCADE, related_name='pokemon')
    card_name = models.CharField(blank=False, null=False, max_length=100, unique=False)
    pokemon_type = models.ForeignKey(EnergyTypes, on_delete=models.CASCADE, related_name='types')
    hp = models.SmallIntegerField()
    stage = models.CharField(blank=True, null=True, max_length=50, unique=False)
    ex_rule = models.CharField(blank=True, null=True, max_length=455, unique=False)
    weakness = models.CharField(blank=True, null=True, max_length=50, unique=False)
    resistance = models.CharField(blank=True, null=True, max_length=50, unique=False)
    retreat = models.CharField(blank=True, null=True, max_length=50, unique=False)
    pokemon_description = models.CharField(blank=True, null=True, max_length=250, unique=False)
    ability_name = models.CharField(blank=True, null=True, max_length=50, unique=False)
    ability_description = models.CharField(blank=True, null=True, max_length=450, unique=False)
    attack = models.ManyToManyField(Attack, related_name='attack', blank=True, null=True)
    
    
    def __str__(self):
        return self.card_name
    


    
    
    
    