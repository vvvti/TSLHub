from django.urls import path
from .api import VehiculeViewSet, RegistrationCertificateViewSet, VehiculeCardViewSet, TechnicalInspectionViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/vehicule', VehiculeViewSet, 'vehicule'),
router.register('api/regcertificate',
                RegistrationCertificateViewSet, 'regcertificate'),
router.register('api/vehiculecard', VehiculeCardViewSet, 'vehiculecard'),
router.register('api/techinspection',
                TechnicalInspectionViewSet, 'techinspection'),

urlpatterns = router.urls
