from django.db import models
class Categories(models.Model):
    name = models.CharField(max_length=255)
    
class Products(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    description = models.TextField()
    like = models.IntegerField()
    categorie_id = models.ForeignKey(to="Categories", on_delete=models.CASCADE)

    