
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

    # return Response('ok')

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated]) 
def supervisor_employees(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        supervisors = Supervisor(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        supervisors = Supervisor.objects.filter(user_id=request.user.id)
        serializer = SupervisorSerializer(supervisors, many=True)
        return Response(serializer.data)
