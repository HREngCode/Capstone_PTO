from django.urls import path
from pto_requests import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('all/', views.get_all_pto_requests),
    path('changes/', views.pto_request_create),
    path('<int:pk>/', views.pto_request_detail),
]
