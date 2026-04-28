from django.contrib import admin
from .models import Recipe


@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('external_id', 'title', 'publisher', 'social_rank', 'created_at')
    search_fields = ('title', 'publisher', 'external_id')
    ordering = ('-created_at',)
