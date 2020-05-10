from django.contrib import admin
from vehicules.models import Vehicule, RegistrationCertificate, VehiculeCard, TechnicalInspection


admin.site.register(Vehicule)
admin.site.register(RegistrationCertificate)
admin.site.register(VehiculeCard)
admin.site.register(TechnicalInspection)
