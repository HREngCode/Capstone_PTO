from django.urls import path
from pto_requests import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('all/', views.get_all_pto_requests),
    path('supervisor/', views.get_request_by_supervisor),
    path('employee/<int:id>/', views.get_request_by_employee_id),
    path('<int:id>/', views.get_request_by_request_id),
    path('employee_number/<int:id>/', views.get_request_by_employee_number),
    path('changes/', views.pto_request_create),
    path('<int:pk>/', views.pto_request_detail),
]