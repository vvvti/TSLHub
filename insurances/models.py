from django.db import models
from django.contrib.auth.models import User


class Insurance(models.Model):
    owner = models.ForeignKey("main.CompanyProfile", on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    number = models.CharField(verbose_name="Numer", max_length=100)
    insurance_type = models.CharField(
        verbose_name="Rodzaj ubezpieczenia", max_length=50)
    insurance_company = models.CharField(
        verbose_name="Ubezpieczyciel", max_length=250)
    start_date = models.DateField(verbose_name="Data rozpoczęcia")
    expiry_date = models.DateField(verbose_name="Data zakończenia")
    insurance_cost = models.DecimalField(
        verbose_name="Koszt ubezpieczenia", decimal_places=2, max_digits=9)
    payment_type = models.CharField(
        verbose_name="Sposób zapłaty", max_length=50)
    insurance_owner = models.CharField(
        verbose_name="Ubezpieczający", max_length=250)
    vehicule_owner = models.CharField(
        verbose_name="Właściciel pojazdu", max_length=250)

    def __str__(self):
        return (self.number)


class PaymentRate(models.Model):
    policy = models.ForeignKey(Insurance, on_delete=models.CASCADE)
    rate_number = models.IntegerField(verbose_name="Numer raty")
    rate_date = models.DateField(verbose_name="Data raty")
    rate_amount = models.DecimalField(
        verbose_name="Kwota do zapłaty", decimal_places=2, max_digits=9)

    def __str__(self):
        return (self.rate_date)
