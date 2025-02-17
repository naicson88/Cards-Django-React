from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('excel-deck', index),
    path('pkm-home', index),
    path('pkm-details', index),
    path('pkm-card', index),
    path('pkm-new-pokemon', index),
    
]