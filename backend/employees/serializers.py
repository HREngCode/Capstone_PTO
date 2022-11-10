from rest_framework import serializers
from .models import Employee

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'user_id', 'employee_number', 'employee_name', 'department', 'supervisor_id', 'hire_date', 'pto_balance', 'active']
        depth = 1
