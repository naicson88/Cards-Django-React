from django.db import models

class PokemonTypes(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=True, verbose_name='ID')
    name = models.CharField(blank=False, null=False, max_length=100, unique=True)
    presentation_name = models.CharField(blank=True, null=True, max_length=50)
    
    def __str__(self):
        return self.name