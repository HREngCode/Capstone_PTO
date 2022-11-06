from django.db import models
from employees.models import Employee


# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Request(models.Model):
    employee_number = models.ForeignKey(Employee, on_delete=models.CASCADE)
    hours_requested = models.IntegerField()
    