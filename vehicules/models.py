from django.db import models


class Car(models.Model):
    reg_number = models.CharField(verbose_name="Number rejestracji", max_length=15)
    car_typ = models.CharField(verbose_name="Typ pojazdu", max_length=30, blank=False)
    car_brand = models.CharField(verbose_name="Marka pojazdu", max_length=30)
    car_model = models.CharField(verbose_name="Model pojazdu", max_length=50)
    vin = models.CharField(verbose_name="Numer Vin", max_length=17, blank=False)
    first_reg = models.DateField(verbose_name="Data pierwszej rejestracji")
    reg_owner = models.CharField(verbose_name="Pierwszy właściciel", max_length="50")
    pesel = models.CharField(verbose_name="Pesel/Regon", max_length=15)
    address = models.CharField(verbose_name="Adres rejestracji", max_length=100)
    max_weight = models.IntegerField(verbose_name="Maksymalna waga całkowita")
    allowed_weight = models.IntegerField(verbose_name="Dopuszczalna masa całkowita")
    allowed_group_weight = models.IntegerField(
        verbose_name="Dopuszczalna masa zespołu pojazdów"
    )
    total_weight = models.IntegerField(verbose_name="Masa własna pojazdu")
    homologation_number = models.CharField(verbose_name="Numer świadectwa homologacji")
    max_wtrailer_break = models.IntegerField(
        verbose_name="Masa całkowita przyczepy z hamulcem"
    )
    max_wtrailer = models.IntegerField(
        verbose_name="Masa całkowita przyczepy bez hamulca"
    )
    engine_v = models.FloatField(verbose_name="Pojemność silnika")
    engine_power = models.IntegerField(verbose_name="Moc silnika")
    engine_power_netto = models.FloatField(verbose_name="Moc netto silnika")
    fuel_type = models.CharField(verbose_name="Rodzaj paliwa")
    seat_number = models.IntegerField(verbose_name="Ilość miejsc siedzących")
    stand_number = models.IntegerField(verbose_name="Ilość miejsc stojących")
    mileage = models.IntegerField(verbose_name="Przebieg")

    class Meta:
        ordering = ["reg_number"]
        verbose_name = "Samochód"
        verbose_name_plural = "Samochody"

    def __str__(self):
        return "%s" % (self.reg_number)
