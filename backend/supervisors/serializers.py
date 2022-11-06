from rest_framework import serializers
from .models import Supervisor

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class SupervisorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supervisor
        fields = ['id', 'supervisor_id', 'supervisor_name', 'department']
        depth = 1
