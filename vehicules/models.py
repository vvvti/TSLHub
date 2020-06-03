from django.db import models
from django.contrib.auth.models import User


class Vehicule(models.Model):

    user = models.ForeignKey(
        User, related_name="vehicule", on_delete=models.CASCADE)
    registration_number = models.CharField(
        "Number rejestracyjny", max_length=8)
    vehicule_brand = models.CharField("Marka pojazdu", max_length=150)
    vehicule_type = models.CharField("Typ pojazdu", max_length=30, blank=True)
    vehicule_model = models.CharField(
        "Model pojazdu", max_length=30, blank=True)
    vin_number = models.CharField("Numer nadwozia", max_length=17, unique=True)
    first_registration_date = models.DateField(
        "Data pierwszej rejestracji")
    registration_owner_name = models.CharField(
        "Nazwa właściciela dowodu rejestracyjnego", max_length=250)
    reg_owner_pesel_regon = models.IntegerField(
        "Pesel, Regon właściciela dowodu rejestracyjnego")
    reg_owner_address = models.CharField(
        "Adres właściciela dowodu rejestracyjnego", max_length=250)
    owner_name = models.CharField(
        "Nazwa właściciela", max_length=250)
    owner_pesel_regon = models.IntegerField(
        "Pesel, Regon właściciela pojazdu")
    owner_address = models.CharField(
        "Adres właściciela pojazdu", max_length=250)
    max_total_weight = models.IntegerField(
        "Maksymalna masa całkowita pojazdu", blank=True, null=True)
    perm_gross_weight = models.IntegerField(
        "Dopuszczalna masa całkowita pojazdu", blank=True, null=True)
    perm_gross_group = models.IntegerField(
        "Dopuszczalna masa całkowita zespołu pojazdów", blank=True, null=True)
    gross_weight = models.IntegerField("Masa własna pojazdu")
    vehicule_category = models.CharField(
        "Kategoria pojazdu", max_length=150, blank=True)
    homologation_number = models.CharField(
        "Numer homologacji", max_length=45, blank=True)
    axle_count = models.IntegerField("Liczba osi")
    trailer_total_break = models.IntegerField(
        "Maksymalna masa całkowita przyczepy z hamulcem", blank=True, null=True)
    trailer_total = models.IntegerField(
        "Maksymalna masa całkowita przyczepy bez hamulca", blank=True, null=True)
    engine_capacity = models.FloatField(
        "Pojemność silnika", blank=True, null=True)
    engine_power = models.FloatField(
        "Moc silnika", blank=True, null=True)
    fuel_kind = models.CharField(
        "Rodzaj paliwa", max_length=30, blank=True)
    power_to_weight = models.FloatField(
        "Stosunek mocy do masy własnej", blank=True, null=True)
    seat_count = models.IntegerField(
        "Liczba miejsc siedzących", blank=True, null=True)
    places_count = models.IntegerField(
        "Liczba miejsc stojących", blank=True, null=True)
    vehicule_kind = models.CharField(
        "Rodzaj pojazdu", max_length=45)
    vehicule_purpose = models.CharField(
        "Przeznaczenie pojazdu", max_length=45, blank=True)
    production_year = models.IntegerField("Rok produkcji")
    allowed_package = models.IntegerField(
        "Dopuszczalna ładowność", blank=True, null=True)
    axle_pressure = models.FloatField(
        "Dopuszczalny nacisk na oś", blank=True, null=True)
    milage = models.IntegerField(
        "Przebieg", blank=True, null=True)
    is_active = models.BooleanField
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["registration_number"]
        verbose_name = "Pojazd"
        verbose_name_plural = "Pojazdy"

    def __str__(self):
        return "%s" % (self.registration_number)


class RegistrationCertificate(models.Model):
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE)
    cert_series = models.CharField(
        "Seria dowodu rejestracyjnego", max_length=2)
    cert_number = models.IntegerField(
        "Numer dowodu rejestracyjnego")
    release_date = models.DateField("Data wydania dowodu")
    expiry_date = models.DateField(
        "Data ważności dowodu", blank=True, null=True)
    is_active = models.BooleanField
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.cert_number)

    class Meta:
        verbose_name = "Dowód rejestracyjny"
        verbose_name_plural = "Dowody rejestracyjne"


class VehiculeCard(models.Model):
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE)
    card_series = models.CharField(
        "Seria karty pojazdu", max_length=3)
    card_number = models.IntegerField("Numer karty pojazdu")
    is_active = models.BooleanField
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.card_number)

    class Meta:
        verbose_name = "Karta pojazdu"
        verbose_name_plural = "Karty pojazdów"


class TechnicalInspection(models.Model):
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE)
    inspection_date = models.DateField(
        "Data badania technicznego")
    inspection_expiry = models.DateField(
        "Data ważności badania technicznego")
    is_active = models.BooleanField
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.inspection_date)

    class Meta:
        verbose_name = "Badanie techniczne"
        verbose_name_plural = "Badania techniczne"
