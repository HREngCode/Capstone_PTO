from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.employee_list),
    # path('<int:pk>/', views.employee_by_id),
    path('', views.employee_detail)
]
