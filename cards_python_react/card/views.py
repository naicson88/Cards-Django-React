from django.shortcuts import render

from rest_framework.decorators import api_view
from .models import Card
from .serializer import *
from rest_framework.response import Response
from rest_framework import status
# delete from card_card where pokemon_id_id = 84

# delete from card_attack where id > 275

#  delete from card_card_attack where card_id in (select id from card_card where pokemon_id_id = 84)
# Create your views here.
@api_view(['POST'])
def create_card (request):
    serializer = CardSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    print(serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_all_cards(request):
    data = Card.objects.all()
    serializer = CardSerializerGET(data, context={'request': request}, many=True)
    
    return Response(serializer.data,  status=status.HTTP_200_OK)


@api_view(['GET'])
def get_all_pokemon_attacks(request, pokemon_id):
    cards = Card.objects.filter(pokemon_id=pokemon_id)
    print(cards)
    data = []
    atk_name = []
    
    for card in cards:
        for atk in card.attack.all():
                if atk.name not in atk_name:
                  atk_name.append(atk.name)    
                  data.append(atk)

    serializer = AttackSerializer(data, context={'request': request}, many=True)
    
    return Response(serializer.data,  status=status.HTTP_200_OK)


@api_view(['GET'])
def get_all_pokemon_cards(request, pokemon_id):
    data = Card.objects.filter(pokemon_id=pokemon_id)
    serializer = CardSimpleSerializer(data, context={'request': request}, many=True)
    
    return Response(serializer.data,  status=status.HTTP_200_OK)

@api_view(['GET'])
def get_card_by_id(request, pk):
    data = Card.objects.get(pk=pk)
    serializer = CardSerializerGET(data, context={'request': request})
    
    return Response(serializer.data,  status=status.HTTP_200_OK)
