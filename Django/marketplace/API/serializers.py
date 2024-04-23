from rest_framework import serializers

from .models import Products , Categories

class CategoriesSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    id = serializers.IntegerField()
    def create(self, validated_data):
        instance = Products.objects.create(
            name=validated_data.get('name'),
            
        )
        return instance
        
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)

        return instance
    
    def delete(self, instance):
        instance.delete()
        
class ProductsSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    price = serializers.IntegerField()
    description = serializers.CharField()
    like = serializers.IntegerField()
    categorie_id = CategoriesSerializer()

    


    

    