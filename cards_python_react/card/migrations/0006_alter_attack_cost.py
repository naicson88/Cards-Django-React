# Generated by Django 5.0.3 on 2025-03-17 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0005_alter_card_api_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attack',
            name='cost',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
