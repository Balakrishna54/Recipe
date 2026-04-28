from django.db import models


class Recipe(models.Model):
    external_id = models.CharField(max_length=255, unique=True)
    title = models.CharField(max_length=255)
    publisher = models.CharField(max_length=255, blank=True)
    source_url = models.URLField(blank=True)
    image_url = models.URLField(blank=True)
    social_rank = models.FloatField(null=True, blank=True)
    ingredients = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
