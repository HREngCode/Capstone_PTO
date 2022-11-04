from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Employee(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    department = models.CharField(max_length=100)
    supervisor = models.CharField(max_length=30)
    service_date = models.DateField()
    hire_date = models.DateField()

