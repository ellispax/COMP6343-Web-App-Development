from django.shortcuts import render
from django.http import HttpResponse
from .models import ContactUs
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import ContactUsSerializer
from rest_framework.views import APIView


@api_view(['GET','POST'])
def ContactUs_view(request):
    if request.method=='GET':
        contact_us=ContactUs.objects.all()
        serializer=ContactUsSerializer(contact_us,many=True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer=ContactUsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST','DELETE'])
def ContactUs_detail(request,pk):
    try:
        ContactUs_ind=ContactUs.objects.get(pk=pk)
    except ContactUs.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    if request.method=='GET':
        serializer=ContactUsSerializer(ContactUs_ind)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer=ContactUsSerializer(ContactUs_ind,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method=="DELETE":
        ContactUs_ind.delete()
        return Response(satus=status.HTTP_204_NO_CONTENT)
class submit_contact(APIView):
    def post(self,request):
        serializer=ContactUsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)



