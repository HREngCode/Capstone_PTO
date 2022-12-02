from django.db import models
from authentication.models import User


# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Supervisor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    supervisor_id = models.IntegerField()
    supervisor_name = models.CharField(max_length=30)
    department = models.CharField(max_length=100)
