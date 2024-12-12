from django.contrib import admin
from django.urls import path, include
from property.api import properties_list  # Import the view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/properties/', properties_list, name='api_properties_list'),
]
