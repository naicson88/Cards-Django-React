from django.db import models

class EnergyTypes(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=True, verbose_name='ID')
    name = models.CharField(blank=False, null=False, max_length=100, unique=True)
    img = models.CharField(blank=False, null=False, max_length=100)
    
    def __str__(self):
        return self.name