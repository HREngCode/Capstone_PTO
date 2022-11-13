from django.db import models
from employees.models import Employee


# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class PtoRequest(models.Model):
    pto_request_id = models.IntegerField()
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    hours_requested = models.DecimalField(max_digits=7, decimal_places=4)
    