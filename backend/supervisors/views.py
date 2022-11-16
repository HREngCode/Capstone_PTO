
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Supervisor
from .serializers import SupervisorSerializer

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_supervisors(request):
        supervisors = Supervisor.objects.all()
        serializer = SupervisorSerializer(supervisors, many=True)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_by_supervisor_name(request):
    supervisor_param = request.query_params.get('supervisor_name')
    sort_param = request.query_params.get('sort')
    supervisors = Supervisor.objects.all()
    if supervisor_param:
        supervisors = supervisors.filter(supervisor_name=supervisor_param)
    if sort_param:
        supervisors = supervisors.order_by(sort_param)
    serializer = SupervisorSerializer(supervisors, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def supervisor_create(request):
    serializer = SupervisorSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated]) 
def supervisor_detail(request, pk):
    supervisor = Supervisor.objects.get(pk=pk)
    if request.method == 'GET':
        try:
            serializer = SupervisorSerializer(supervisor)
            return Response(serializer.data)
        except Supervisor.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    elif request.method == 'PUT':
        serializer = SupervisorSerializer(supervisor, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        supervisor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)