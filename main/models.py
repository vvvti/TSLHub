from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from datetime import datetime



class CompanyProfile(models.Model):
    company_name = models.CharField(max_length=250)
    address_street = models.CharField(max_length=250)
    address_number = models.CharField(max_length=150)
    address_city = models.CharField(max_length=250)
    address_zip = models.CharField(max_length=15)
    company_email = models.EmailField
    company_website = models.CharField(max_length=250)
    company_phone = models.CharField(max_length=20)
    company_phone2 = models.CharField(max_length=20)
    company_nip = models.IntegerField
    company_regon = models.IntegerField
    is_active = models.BooleanField

    def __str__(self):
        return(self.company_name)

class Group(models.Model):
    profile = models.ForeignKey(CompanyProfile, related_name="group", on_delete=models.CASCADE)
    group_name = models.CharField(max_length=250)

    def __str__(self):
        return(self.group_name)

class Profile(models.Model):
    user = models.ForeignKey(
        User, related_name="profile", on_delete=models.CASCADE)
    telephone_number = models.CharField(max_length=50)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=250)

    def __str__(self):
        return(self.last_name)
