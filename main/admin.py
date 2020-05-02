from django.contrib import admin
from . models import Profile, CompanyProfile, Group

admin.site.register(Profile)
admin.site.register(CompanyProfile)
admin.site.register(Group)
