from rest_framework import generics, permissions, viewsets
from rest_framework.response import Response
from .serializers import VehiculeSerializer, RegistrationCertificateSerializer, VehiculeCardSerializer, TechnicalInspectionSerializer
from . models import Vehicule, RegistrationCertificate, VehiculeCard, TechnicalInspection


class VehiculeViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = VehiculeSerializer

    queryset = Vehicule.objects.all()

    # def get_queryset(self):
    #     return self.request.user.vehicule.all()

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)


class RegistrationCertificateViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = RegistrationCertificateSerializer

    def get_queryset(self):
        return self.request.user.registrationcertificate.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class VehiculeCardViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = VehiculeCardSerializer

    def get_queryset(self):
        return self.request.user.vehiculecard.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TechnicalInspectionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = TechnicalInspectionSerializer

    def get_queryset(self):
        return self.request.user.technicalinspection.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
