from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.employee_list),
    path('<int:pk>/', views.employee_detail),
    path('user/<user>/', views.get_name_by_user_id),
    path('supervisor/<user>/', views.get_name_by_supervisor_number),
    path('changes/', views.employee_create),
    path('employee_number/<user>/', views.get_name_by_employee_number),
]
