from django.contrib import admin
from vehicules.models import Car


class CarAdmin(admin.ModelAdmin):
    list_display = ("pk", "reg_number", "car_typ", "car_brand", "car_model")
    list_display_links = ("reg_number",)
    search_fields = ("reg_number", "car_model")


admin.site.register(Car, CarAdmin)
