from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import PokemonTypes
from .serializer import *
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['POST'])
def create_pokemon_type (request):
    serializer = PokemonTypesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_all_pokemon_types(request):
    data = PokemonTypes.objects.all()
    serializer = PokemonTypesSerializer(data, context={'request': request}, many=True)
    
    return Response(serializer.data,  status=status.HTTP_200_OK)