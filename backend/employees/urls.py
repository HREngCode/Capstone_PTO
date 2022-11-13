from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.employee_list),
    path('<int:pk>/', views.employee_detail),
    path('supervisor_list/<id>/', views.supervisor_employee),
    path('changes/', views.employee_create)
]
