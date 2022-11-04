from rest_framework import serializers
from .models import Employee

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'user', 'name', 'department', 'supervisor', 'service_date', 'hire_date']
        depth = 1
