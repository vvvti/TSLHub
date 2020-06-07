from rest_framework import generics, permissions, viewsets
from rest_framework.response import Response
from .serializers import InsuranceSerializer, PaymentRateSerializer
from . models import Insurance, PaymentRate


class InsuranceViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = InsuranceSerializer

    queryset = Insurance.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class PaymentRateViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = PaymentRateSerializer

    queryset = PaymentRate.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
