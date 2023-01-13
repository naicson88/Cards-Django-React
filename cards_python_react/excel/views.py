from django.shortcuts import render

from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import DeckFromExcel
from .serializer import *
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def create_deck (request):
    serializer = DeckFromExcelSerializer(data=request.data)
    if serializer.is_valid():
        deck = DeckFromExcel.excel_deck(serializer)
        
       # serializer.save()
        return Response(data=deck, status=status.HTTP_201_CREATED)
    
    return Response( serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def deck_list(request):
        data = DeckFromExcel.objects.all()
        serializer = DeckFromExcelSerializer(data, context={'request': request}, many=True)
        
        return Response(serializer.data)
