from django.db import models

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Employee(models.Model):
    employee_name = models.CharField(max_length=30)
    department = models.CharField(max_length=100)
    supervisor = models.CharField(max_length=30)
    hire_date = models.DateField()
    status = models.BooleanField()

