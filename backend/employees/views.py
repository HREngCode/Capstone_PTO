from rest_framework import status
# from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Employee
from .serializers import EmployeeSerializer


# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET'])
@permission_classes([AllowAny])
def employee_list(request):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_by_employee_number(request):
    employee_param = request.query_params.get('employee_number')
    sort_param = request.query_params.get('sort')
    employees = Employee.objects.all()
    if employee_param:
        employees = employees.filter(employee_number=employee_param)
    if sort_param:
        employees = employees.order_by(sort_param)
    serializer = EmployeeSerializer(employees, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def employee_create(request):
    serializer = EmployeeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated]) 
def employee_detail(request, pk):
    employee = Employee.objects.get(pk=pk)
    if request.method == 'GET':
        try:
            serializer = EmployeeSerializer(employee)
            return Response(serializer.data)
        except Employee.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    elif request.method == 'PUT':
        serializer = EmployeeSerializer(employee, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    
@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def get_employee_by_supervisor(request, id):
    employees = request.query_params.get(id)
    queryset = Employee.objects.all()
    queryset = queryset.filter(supervisor_id=id)
    serializer = EmployeeSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_name_by_user_id(request, user):
    employees = request.query_params.get(user)
    employees = Employee.objects.all()
    employees = employees.get(user_id=user)
    serializer = EmployeeSerializer(employees)
    return Response(serializer.data, status=status.HTTP_200_OK)
    