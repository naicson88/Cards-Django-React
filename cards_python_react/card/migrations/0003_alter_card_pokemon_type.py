# Generated by Django 5.0.3 on 2025-02-16 18:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0002_rename_pokemon_card_pokemon_id'),
        ('energy_types', '0002_alter_energytypes_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='pokemon_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='types', to='energy_types.energytypes'),
        ),
    ]
