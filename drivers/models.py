from django.db import models
from django.contrib.auth.models import User


class Driver(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)    
    first_name = models.CharField("Imię", max_length=50)
    last_name = models.CharField("Nazwisko", max_length=50)
    birth_date = models.DateField("Data urodzenia")
    pesel = models.CharField("PESEL", max_length=11)


    def __str__(self):
        return (self.pesel)

class DrivingLicense(models.Model):
    
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
    license_number = models.IntegerField("Numer prawa jazdy")
    license_series = models.CharField("Seria prawa jazdy")
    issue_date = models.DateField("Data wydania")
    expiry_date = models.DateField("Data ważności")

    def __str__(self):
        return (self.license_number)

class DriverIDCard(models.Model):

    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
    id_number = models.IntegerField("Numer dowodu tożsamości")
    id_series = models.CharField("Seria dowodu tożsamości")
    issue_date = models.DateField("Data wydania")
    expiry_date = models.DateField("Data waznosci")

    def __str__(self):
        return (self.id_number)