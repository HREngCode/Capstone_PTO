from django.urls import path
from supervisors import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('all/', views.get_all_supervisors),
    path('changes/', views.supervisor_create),
    path('<int:pk>/', views.supervisor_detail),
]
