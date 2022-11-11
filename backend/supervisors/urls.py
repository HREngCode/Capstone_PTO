from django.urls import path
from supervisors import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.supervisor_employees),
    path('all/', views.get_all_supervisors),
]
