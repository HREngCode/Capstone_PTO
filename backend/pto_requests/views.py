from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import PtoRequest
from .serializers import PtoRequestSerializer


# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_pto_requests(request):
        ptorequests = PtoRequest.objects.all()
        serializer = PtoRequestSerializer(ptorequests, many=True)
        return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def pto_request_create(request):
    serializer = PtoRequestSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated]) 
def pto_request_detail(request, pk):
    pto_request = PtoRequest.objects.get(pk=pk)
    if request.method == 'GET':
        try:
            serializer = PtoRequestSerializer(pto_request)
            return Response(serializer.data)
        except PtoRequest.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    elif request.method == 'PUT':
        serializer = PtoRequestSerializer(pto_request, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        pto_request.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
