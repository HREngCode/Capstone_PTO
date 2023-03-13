from django.urls import path, include
from . import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('number/<id>/', views.comments_list),
    path('all/', views.get_all_comments),
    path('changes/', views.user_comments),
]