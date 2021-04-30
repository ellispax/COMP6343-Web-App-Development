from django.db import models
from datetime import datetime

class ContactUs(models.Model):
    listing=models.CharField(max_length=200)
    listing_id=models.IntegerField()
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=50)
    phone=models.CharField(max_length=50)
    message=models.TextField()
    contact_date=models.DateTimeField(default=datetime.now)
    user_id=models.IntegerField(blank=True)
    def __str__(self):
        return self.name



# Create your models here.
