from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Pokemon
from .serializer import *
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def create_pokemon (request):
    serializer = PokemonSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_all_pokemon(request):
    data = Pokemon.objects.all()
    serializer = PokemonSerializer(data, context={'request': request}, many=True)
    
    return Response(serializer.data,  status=status.HTTP_200_OK)

@api_view(['GET'])
def get_pokemon_by_id(request, pk):
    data = Pokemon.objects.get(pk=pk)
    print(data)
    serializer = PokemonSerializer(data, context={'request': request})
    
    return Response(serializer.data,  status=status.HTTP_200_OK)
