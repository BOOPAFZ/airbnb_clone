from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from property.api import properties_list  

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/properties/', properties_list, name='api_properties_list'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
