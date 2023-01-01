from django.db import models
from authentication.models import User
from supervisors.models import Supervisor

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Employee(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    employee_number = models.IntegerField( null=True)
    employee_first_name = models.CharField(max_length=30, null=True)
    employee_last_name = models.CharField(max_length=30, null=True)
    department = models.CharField(max_length=100, null=True)
    supervisor = models.ForeignKey(Supervisor, on_delete=models.CASCADE, null=True)
    hire_date = models.DateField(null=True)
    pto_balance = models.DecimalField(max_digits=7, decimal_places=4, null=True)
    active = models.BooleanField(null=True)

