from django.contrib import admin
from django.urls import path, include
from django.conf import settings


urlpatterns = [
    path('', include('react.urls')),
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('', include('vehicules.urls')),
    path('', include('insurances.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [path('__debug__/', include(debug_toolbar.urls))]
