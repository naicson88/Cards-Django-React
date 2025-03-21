from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Pokemon
from .serializer import *
from rest_framework.response import Response
from rest_framework import status
from django.core.paginator import Paginator


@api_view(['POST'])
def create_pokemon (request):
    serializer = PokemonSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    print(serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_all_pokemon(request):
    size = request.GET.get("size", 15)
    page = request.GET.get("page", 1)
    pokemons = Pokemon.objects.all().order_by('id')
   
    p = Paginator(pokemons, size)
    num_pages = p.num_pages
    data = p.page(page)
    
    headers = {'num_pages': num_pages}
    serializer = PokemonSerializerGET(data, context={'request': request}, many=True)
    
    return Response(serializer.data, headers=headers, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_pokemon_by_name(request, name):
    print(name)
    data = Pokemon.objects.filter(name=name)[:1].get()
    serializer = PokemonSerializerGET(data, context={'request': request})
    
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
    serializer = PokemonSerializerGET(data, context={'request': request}, many=True)
    
    return Response(serializer.data,  status=status.HTTP_200_OK)

@api_view(['PUT'])
def edit_pokemon_by_id(request):
  
    pokemon = Pokemon.objects.get(pk=request.data.get('id'))
    
    for attr, value in request.data.items():
        if(attr != 'type'):
            setattr(pokemon, attr, value)
    
    pokemon.type.set(request.data.get('type'))
    pokemon.save()
    
    return Response("Salvo com sucesso",  status=status.HTTP_200_OK)

