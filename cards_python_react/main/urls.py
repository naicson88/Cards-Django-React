"""cards_python_react URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api import views
from excel import views as excel_views
from crawler import views as crawler_views
from energy_types import views as energy_types_views
from pokemon_types import views as pokemon_types
from pokemon import views as pokemon
from card import views as card

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', views.students_list),
    path('create-student', views.create_studante),
    path('edit-student', views.edit_studant),
    path('delete-student', views.delete_student),
    
    path('create-deck', excel_views.create_deck),
    path('get-decks', excel_views.deck_list),
    path('create-deck-reading-names', excel_views.create_deck_reading_names),

    
    path('crawler/create-crawler-deck', crawler_views.create_deck),
    
    path('', include('frontend.urls')),
    path('excel-deck', include('frontend.urls')),
    
    path('energy-types/create', energy_types_views.create_energy_type),
    path('energy-types/<int:pk>/', energy_types_views.delete_energy_type),
    path('energy-types', energy_types_views.get_all_energy_types),
    
    path('pokemon-types/create', pokemon_types.create_pokemon_type),
    path('pokemon-types', pokemon_types.get_all_pokemon_types),
    
    path('pokemon/create', pokemon.create_pokemon),
    path('pokemon', pokemon.get_all_pokemon),
    path('pokemon/<int:pk>/', pokemon.get_pokemon_by_id),
    path('pokemon/evolutions/<int:pk>', pokemon.get_pokemon_evolutions),
    
    
    
    path('card/create', card.create_card),
    path('card', card.get_all_cards),
    path('card/pokemon-attacks/<int:pokemon_id>', card.get_all_pokemon_attacks),
]
