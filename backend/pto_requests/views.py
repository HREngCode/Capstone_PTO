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

    # return Response('ok')

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated]) 
def pto_request_detail(request, pk):
    ptorequest = get_object_or_404(PtoRequest, pk=pk) #gets specific object
    if request.method == 'GET':
        serializer = PtoRequestSerializer(ptorequest)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PtoRequestSerializer(ptorequest, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        ptorequest.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
