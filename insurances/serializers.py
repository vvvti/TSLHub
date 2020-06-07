from rest_framework import serializers
from . models import Insurance, PaymentRate


class InsuranceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insurance
        fields = (
            '__all__'
        )


class PaymentRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentRate
        fields = (
            '__all__'
        )
