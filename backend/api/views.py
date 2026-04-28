from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from .models import Recipe
from .serializers import RecipeSerializer


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all().order_by('-created_at')
    serializer_class = RecipeSerializer

    @action(detail=False, methods=['get'])
    def popular(self, request):
        popular_recipes = self.queryset[:10]
        serializer = self.get_serializer(popular_recipes, many=True)
        return Response(serializer.data)
