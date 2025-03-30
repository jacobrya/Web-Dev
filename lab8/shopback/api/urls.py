from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('products/', views.products),
    path('products/<int:id>/', views.product_detail),
    path('categories/', views.categories),
    path('categories/<int:id>/', views.category_detail),
    path('categories/<int:id>/products/', views.category_products),
]