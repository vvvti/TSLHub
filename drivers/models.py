from django.db import models
from django.contrib.auth.models import User


class Driver(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)    
    first_name = models.CharField("Imię", max_length=50)
    last_name = models.CharField("Nazwisko", max_length=50)
    birth_date = models.DateField("Data urodzenia")
    pesel = models.CharField("PESEL", max_length=11)
    driving_license_number = models.IntegerField("Seria i numer prawa jazdy")
    
    

    def __str__(self):
        return (self.pesel)
