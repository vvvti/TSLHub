from django.db import models
from django.contrib.auth.models import User


class Insurance(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    vehicule = models.ForeignKey(
        "vehicules.Vehicule", on_delete=models.CASCADE, null=True)
    number = models.CharField("Numer", max_length=100)
    insurance_type = models.CharField(
        "Rodzaj ubezpieczenia", max_length=50)
    insurance_company = models.CharField(
        "Ubezpieczyciel", max_length=250)
    start_date = models.DateField("Data rozpoczęcia")
    expiry_date = models.DateField("Data zakończenia")
    insurance_cost = models.DecimalField(
        "Koszt ubezpieczenia", decimal_places=2, max_digits=9)
    payment_type = models.CharField(
        "Sposób zapłaty", max_length=50)
    insurance_owner = models.CharField(
        "Ubezpieczający", max_length=250)
    vehicule_owner = models.CharField(
        "Właściciel pojazdu", max_length=250)

    def __str__(self):
        return (self.number)


class PaymentRate(models.Model):
    policy = models.ForeignKey(Insurance, on_delete=models.CASCADE)
    rate_number = models.IntegerField("Numer raty")
    rate_date = models.DateField("Data raty")
    rate_amount = models.DecimalField(
        "Kwota do zapłaty", decimal_places=2, max_digits=9)

    def __str__(self):
        return str(self.rate_date)
