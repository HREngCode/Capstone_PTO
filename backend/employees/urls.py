from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.employee_list),
    path('<int:pk>/', views.employee_detail),
    path('supervisor/<id>/', views.get_employee_by_supervisor),
    path('changes/', views.employee_create),
    path('employee_number/', views.get_by_employee_number),
]
