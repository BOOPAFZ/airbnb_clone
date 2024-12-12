from rest_framework import serializers
from django.conf import settings  # Import the settings module
from .models import Property

class PropertiesListSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Property
        fields = (
            'id',
            'title',
            'price_per_night',
            'image_url',
        )

    def get_image_url(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.image.url).rstrip('"')  # Remove trailing quotation mark
        return f'{settings.WEBSITE_URL}{obj.image.url}'.rstrip('"')  # Remove trailing quotation mark
