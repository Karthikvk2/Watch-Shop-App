from django.contrib import admin
from django.urls import path
from .views import get_watches, create_watches

urlpatterns = [
    path('api/watches/', get_watches, name='watches-list'),
    path('api/watches/create/', create_watches, name='watches-list'),
]