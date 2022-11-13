from rest_framework import serializers
from .models import PtoRequest

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class PtoRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = PtoRequest
        fields = ['id', 'employee_id', 'hours_requested']
        depth = 1


