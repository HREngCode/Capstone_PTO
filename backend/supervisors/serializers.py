from rest_framework import serializers
from .models import Supervisor

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class SupervisorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supervisor
        fields = ['id', 'supervisor_id', 'supervisor_name', 'department' 'user', 'user_id',]
        depth = 1

    user_id = serializers.IntegerField(write_only=True)
