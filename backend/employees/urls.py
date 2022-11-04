from django.urls import path, include
from employees import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_employees),
    path('all/', views.get_all_employees),
]
