from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework.generics import ListAPIView,RetrieveAPIView

from .models import Listing
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import ListingSerializer
from rest_framework.views import APIView
from rest_framework import viewsets

# @api_view(['GET','POST'])
# def Listing_view(request):
#     if request.method=='GET':
#         listing=Listing.objects.all()
#         serializer=ListingSerializer(listing,many=True)
#         return Response(serializer.data)
#     elif request.method=='POST':
#         serializer=ListingSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#




# class Listing_detail_1(APIView):
#     def get_object(self,id):
#         try:
#             return Listing.objects.get(id=id)
#         except Listing.DoesNotExist:
#             return HttpResponse(status=status.HTTP_404_NOT_FOUND)
#
#     def get(self,request,id):
#         listing=self.get_object(id)
#         serializer=ListingSerializer(listing)
#         return Response(serializer.data)
#
#     def put(self,request,id):
#         listing=self.get_object(id)
#         serializer=ListingSerializer(listing,data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self,request,id):
#         listing=self.get_object(id)
#         listing.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
#
#
#


# @api_view(['GET','POST','DELETE'])
# def Listing_detail(request,pk):
#     try:
#         listing_ind=Listing.objects.get(pk=pk)
#     except Listing.DoesNotExist:
#         return HttpResponse(status=status.HTTP_404_NOT_FOUND)
#     if request.method=='GET':
#         serializer=ListingSerializer(listing_ind)
#         return Response(serializer.data)
#     elif request.method=='PUT':
#         serializer=ListingSerializer(listing_ind,data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
#     elif request.method=="DELETE":
#         listing_ind.delete()
#         return Response(satus=status.HTTP_204_NO_CONTENT)



class Listing_view(ListAPIView):
    queryset=Listing.objects.all()
    serializer_class = ListingSerializer

    # def post(self, request, *args, **kwargs):
    #     file = request.data['file']
    #     image = Listing.objects.create(image=file)
    #     import json
    #     return HttpResponse(json.dumps({'message': "Uploaded"}), status=200)
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)






class Listing_detail(RetrieveAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

    def put(self, request, id):
        listing=self.get_object(id)
        serializer=ListingSerializer(listing,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)




    # lookup_field = 'members'




# class Listing_detail_1(ListAPIView):
#
#     def __init__(self, pk):
#         self.pk = pk
#         queryset = Listing.objects.get(pk=pk)
#         serializer_class = ListingSerializer




