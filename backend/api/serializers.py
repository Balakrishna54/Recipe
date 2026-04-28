from rest_framework import serializers

from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = [
            'id',
            'external_id',
            'title',
            'publisher',
            'source_url',
            'image_url',
            'social_rank',
            'ingredients',
            'created_at',
            'updated_at',
        ]
