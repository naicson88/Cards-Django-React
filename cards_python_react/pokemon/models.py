from django.db import models

from pokemon_types.models import PokemonTypes

class Pokemon(models.Model):
    id = models.BigIntegerField(auto_created=False, primary_key=True, serialize=True, blank=False, null=False, verbose_name='ID')
    name = models.CharField(blank=False, null=False, max_length=100, unique=True)
    evolves_from = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='evolutions_from')
    evolves_to = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='evolutions_to')
    img = models.CharField(blank=False, null=False, max_length=255)
    type = models.ManyToManyField(PokemonTypes, related_name='pokemons', blank=False, null=False)
    species = models.CharField(blank=True, null=True, max_length=100)
    height = models.CharField(blank=True, null=True, max_length=100)
    weight = models.CharField(blank=True, null=True, max_length=100)
    hp = models.SmallIntegerField()  # HP
    attack = models.SmallIntegerField()  # Attack
    defense = models.SmallIntegerField()  # Defense
    sp_atk = models.SmallIntegerField()  # Sp. Atk
    sp_def = models.SmallIntegerField()  # Sp. Def
    speed = models.SmallIntegerField()  # Speed

    def __str__(self):
        return self.name
    
    
