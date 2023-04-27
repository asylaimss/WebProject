from django.shortcuts import render
from django.db import models

class Tutorial(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    img = models.TextField()
    content = models.TextField()

class Category(models.Model):
    name = models.CharField(max_length=255)
    faculty = models.TextField()
    salary = models.TextField()