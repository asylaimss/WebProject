from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


from ..models import Categories
from ..serializers import CategoriesSerializer


class CategoriesListAPIView(APIView):
    def get(self, request):
        categories = Categories.objects.all()
        serializer = CategoriesSerializer(categories, many=True)
        return Response(serializer.data)


class CategoriesDetailAPIView(APIView):
    def get_object(self, pk=None):
        try:
            categories = Categories.objects.get(id=pk)
            return categories
        except Categories.DoesNotExist as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id=None):
        categories = self.get_object(id)
        serializer = CategoriesSerializer(categories)
        return Response(serializer.data)


class CategoriesTopTenAPIView(APIView):
    def get(self, request):
        categories = Categories.objects.order_by("-salary")
        serializer = CategoriesSerializer(categories, many=True)
        return Response(serializer.data)