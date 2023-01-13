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

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', views.students_list),
    path('create-student', views.create_studante),
    path('edit-student', views.edit_studant),
    path('delete-student', views.delete_student),
    
    path('create-deck', excel_views.create_deck),
    path('get-decks', excel_views.deck_list),
]
