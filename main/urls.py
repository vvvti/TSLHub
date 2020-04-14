from django.urls import path, include
from .api import RegistrationAPI, LoginAPI, UserAPI
from knox import views as knox_views
from .api import ProfileViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/profile', ProfileViewSet, 'profile'),
urlpatterns = router.urls

urlpatterns += [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegistrationAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
]
