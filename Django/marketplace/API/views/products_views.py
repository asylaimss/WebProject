from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..models import Products, Categories
from ..serializers import ProductsSerializer, CategoriesSerializer


@api_view(["GET"])
def products_list(request):
    if request.method == "GET":
        products = Products.objects.all()
        serializer = ProductsSerializer(products, many=True)
        return Response(serializer.data)


@api_view(["GET"])
def products_details(request, id=None):
    try:
        products = Products.objects.get(id=id)
    except Products.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        serializer = ProductsSerializer(products)
        return Response(serializer.data)


@api_view(["GET"])
def products_categories(request, id=None):
    try:
        products = Products.objects.get(id=id)
    except Products.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        categories = Categories.objects.filter(products=products)
        serializer = CategoriesSerializer(categories, many=True)
        return Response(serializer.data)