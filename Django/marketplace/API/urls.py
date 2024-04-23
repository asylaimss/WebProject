from django.contrib import admin
from django.urls import path
from .views.products_views import *
from .views.categories_views import *


urlpatterns = [
    path("products/", products_list),
    path("products/<int:id>",products_list),
    path("categories/", CategoriesListAPIView.as_view()),
    path("categories/<int:id>/products", products_list)
]