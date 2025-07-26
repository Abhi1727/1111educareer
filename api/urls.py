from django.urls import path
from . import views

urlpatterns = [
    path('home-data/', views.home_data, name='home_data'),
]