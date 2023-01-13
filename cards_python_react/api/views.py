from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Student
from .serializer import *
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def students_list(request):
        data = Student.objects.all()
        serializer = StudentSerializer(data, context={'request': request}, many=True)
        
        return Response(serializer.data)

@api_view(['POST'])
def create_studante (request):
    serializer = StudentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def edit_studant(request):
    pk = request.data['pk']
    student = valid_student(pk)
    serializer = StudentSerializer(student, data=request.data, context={'request': request})
    
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
def delete_student(request):
    pk = request.data['pk']
    student = valid_student(pk)
    
    student.delete()
    return Response(status=status.HTTP_200_OK)


def valid_student(pk):
    try:
        student = Student.objects.get(pk=pk)
        return student
    except Student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)