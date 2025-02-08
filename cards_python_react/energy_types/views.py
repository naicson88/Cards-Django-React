

# Create your views here.from django.shortcuts import render

from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import EnergyTypes
from .serializer import *
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def create_energy_type (request):
    serializer = EnergyTypesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_energy_type (request, pk):
    try:
        energy_type = EnergyTypes.objects.get(id=pk)
    except EnergyTypes.DoesNotExist:
        return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND) 
    
    energy_type.delete()
    return Response({"detail": "Deleted successfully."}, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_all_energy_types(request):
    data = EnergyTypes.objects.all()
    serializer = EnergyTypesSerializer(data, context={'request': request}, many=True)
    
    return Response(serializer.data,  status=status.HTTP_200_OK)



