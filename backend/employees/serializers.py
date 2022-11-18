from rest_framework import serializers
from .models import Employee

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class EmployeeSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Employee
        fields = ['id', 'employee_number', 'employee_name', 'department', 'supervisor', 'supervisor_id', 'hire_date', 'pto_balance', 'user', 'user_id', 'active']
        depth = 0

    supervisor_id = serializers.IntegerField(write_only=True)
    user_id = serializers.IntegerField(write_only=True)