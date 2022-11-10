from django.db import models
from authentication.models import User
from supervisors.models import Supervisor

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Employee(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    employee_nubmer = models.IntegerField()
    employee_name = models.CharField(max_length=30)
    department = models.CharField(max_length=100)
    supervisor_id = models.ForeignKey(Supervisor, on_delete=models.PROTECT)
    hire_date = models.DateField()
    pto_balance = models.DecimalField(max_digits=5, decimal_places=4)
    active = models.BooleanField()

