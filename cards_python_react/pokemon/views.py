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

@api_view(['GET'])
def get_pokemon_evolutions(request, pk):
    data = Pokemon.objects.get(pk=pk)
    
    evolutions = []
    evolutions.append(data)
    
    if data.evolves_from:
        evolves_from_id = data.evolves_from.id
        has_evolutions = True
        
        while has_evolutions:
            pokemon_evolves_from = Pokemon.objects.get(pk=evolves_from_id)    
            evolutions.insert(0, pokemon_evolves_from)
            if pokemon_evolves_from.evolves_from:
                evolves_from_id = pokemon_evolves_from.evolves_from.id
            has_evolutions = True if pokemon_evolves_from.evolves_from else False
    
    if data.evolves_to:
        evolves_to_id = data.evolves_to.id
        has_evolutions = True
        
        while has_evolutions:
            pokemon_evolves_to = Pokemon.objects.get(pk=evolves_to_id)    
            evolutions.append(pokemon_evolves_to)
            if pokemon_evolves_to.evolves_to:
                evolves_to_id = pokemon_evolves_to.evolves_to.id
            has_evolutions = True if pokemon_evolves_to.evolves_to else False
    
    data = evolutions      
    serializer = PokemonSerializer(data, context={'request': request}, many=True)
    
    return Response(serializer.data,  status=status.HTTP_200_OK)

