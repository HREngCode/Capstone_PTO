from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.employee_list),
]
