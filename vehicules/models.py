from django.db import models


class Vehicule(models.Model):
    owner = models.ForeignKey("main.CompanyProfile", on_delete=models.CASCADE)
    registration_number = models.CharField(
        verbose_name="Number rejestracyjny", max_length=8)
    vehicule_brand = models.CharField(
        verbose_name="Marka pojazdu", max_length=150)
    vehicule_type = models.CharField(
        verbose_name="Typ pojazdu", max_length=30, blank=True)
    vehicule_model = models.CharField(
        verbose_name="Model pojazdu", max_length=30, blank=True)
    vin_number = models.CharField(
        verbose_name="Numer nadwozia", max_length=17, unique=True)
    first_registration_date = models.DateField(
        verbose_name="Data pierwszej rejestracji")
    registration_owner_name = models.CharField(
        verbose_name="Nazwa właściciela dowodu rejestracyjnego", max_length=250)
    reg_owner_pesel_regon = models.IntegerField(
        verbose_name="Pesel, Regon właściciela dowodu rejestracyjnego")
    reg_owner_address = models.CharField(
        verbose_name="Adres właściciela dowodu rejestracyjnego", max_length=250)
    owner_name = models.CharField(
        verbose_name="Nazwa właściciela", max_length=250)
    owner_pesel_regon = models.IntegerField(
        verbose_name="Pesel, Regon właściciela pojazdu")
    owner_address = models.CharField(
        verbose_name="Adres właściciela pojazdu", max_length=250)
    max_total_weight = models.IntegerField(
        verbose_name="Maksymalna masa całkowita pojazdu", blank=True)
    perm_gross_weight = models.IntegerField(
        verbose_name="Dopuszczalna masa całkowita pojazdu", blank=True)
    perm_gross_group = models.IntegerField(
        verbose_name="Dopuszczalna masa całkowita zespołu pojazdów", blank=True)
    gross_weight = models.IntegerField(verbose_name="Masa własna pojazdu")
    vehicule_category = models.CharField(
        verbose_name="Kategoria pojazdu", max_length=150, blank=True)
    homologation_number = models.CharField(
        verbose_name="Numer homologacji", max_length=45, blank=True)
    axle_count = models.IntegerField(verbose_name="Liczba osi")
    trailer_total_break = models.IntegerField(
        verbose_name="Maksymalna masa całkowita przyczepy z hamulcem", blank=True)
    trailer_total = models.IntegerField(
        verbose_name="Maksymalna masa całkowita przyczepy bez hamulca", blank=True)
    engine_capacity = models.FloatField(
        verbose_name="Pojemność silnika", blank=True)
    engine_power = models.FloatField(verbose_name="Moc silnika", blank=True)
    fuel_kind = models.CharField(
        verbose_name="Rodzaj paliwa", max_length=30, blank=True)
    power_to_weight = models.FloatField(
        verbose_name="Stosunek mocy do masy własnej", blank=True)
    seat_count = models.IntegerField(
        verbose_name="Liczba miejsc siedzących", blank=True)
    places_count = models.IntegerField(
        verbose_name="Liczba miejsc stojących", blank=True)
    vehicule_kind = models.CharField(
        verbose_name="Rodzaj pojazdu", max_length=45)
    vehicule_purpose = models.CharField(
        verbose_name="Przeznaczenie pojazdu", max_length=45, blank=True)
    production_year = models.DateField(verbose_name="Rok produkcji")
    allowed_package = models.IntegerField(
        verbose_name="Dopuszczalna ładowność", blank=True)
    axle_pressure = models.FloatField(
        verbose_name="Dopuszczalny nacisk na oś", blank=True)
    milage = models.IntegerField(verbose_name="Przebieg", blank=True)
    is_active = models.BooleanField
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["registration_number"]
        verbose_name = "Pojazd"
        verbose_name_plural = "Pojazdy"

    def __str__(self):
        return "%s" % (self.reg_number)


class RegistrationCertificate(models.Model):
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE)
    cert_series = models.CharField(
        verbose_name="Seria dowodu rejestracyjnego", max_length=2)
    cert_number = models.IntegerField(
        verbose_name="Numer dowodu rejestracyjnego")
    release_date = models.DateField(verbose_name="Data wydania dowodu")
    expiry_date = models.DateField(
        verbose_name="Data ważności dowodu", blank=True)
    is_active = models.BooleanField
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.cert_number)


class VehiculeCard(models.Model):
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE)
    card_series = models.CharField(
        verbose_name="Seria karty pojazdu", max_length=3)
    card_number = models.IntegerField(verbose_name="Numer karty pojazdu")
    is_active = models.BooleanField
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.card_number)


class TechnicalInspection(models.Model):
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE)
    inspection_date = models.DateField(
        verbose_name="Data badania technicznego")
    inspection_expiry = models.DateField(
        verbose_name="Data ważności badania technicznego")
    is_active = models.BooleanField
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.inspection_date)
