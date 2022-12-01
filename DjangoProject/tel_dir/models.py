from django.db import models


# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=20)
    tel1 = models.CharField(max_length=8,unique=True)
    tel2 = models.CharField(max_length=8)
    profession = models.CharField(max_length=20)