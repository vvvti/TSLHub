from rest_framework import serializers
from . models import Vehicule, RegistrationCertificate, VehiculeCard, TechnicalInspection


class VehiculeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicule
        fields = (
            '__all__'
        )


class RegistrationCertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistrationCertificate
        fields = (
            '__all__'
        )


class VehiculeCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehiculeCard
        fields = (
            '__all__'
        )


class TechnicalInspectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnicalInspection
        fields = (
            '__all__'
        )
