from django.db import models
from supervisors.models import Supervisor

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Employee(models.Model):
    employee_nubmer = models.IntegerField()
    employee_name = models.CharField(max_length=30)
    department = models.CharField(max_length=100)
    supervisor = models.CharField(max_length=30)
    supervisor_id = models.ForeignKey(Supervisor, on_delete=models.PROTECT)
    hire_date = models.DateField()
    status = models.BooleanField()

