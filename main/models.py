from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from datetime import datetime


class Profile(models.Model):
    user = models.ForeignKey(
        User, related_name="profile", on_delete=models.CASCADE)
    telephone_number = models.CharField(max_length=50)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=250)

    def __str__(self):
        return(self.last_name)
