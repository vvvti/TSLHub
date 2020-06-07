from django.urls import path
from .api import InsuranceViewSet, PaymentRateViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/insurance', InsuranceViewSet, 'insurance'),
router.register('api/payment_rate',
                PaymentRateViewSet, 'payment_rate'),

urlpatterns = router.urls
