# Generated by Django 3.0.4 on 2020-06-03 21:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('vehicules', '0003_registrationcertificate_technicalinspection_vehicule_vehiculecard'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='registrationcertificate',
            options={'verbose_name': 'Dowód rejestracyjny', 'verbose_name_plural': 'Dowody rejestracyjne'},
        ),
        migrations.AlterModelOptions(
            name='technicalinspection',
            options={'verbose_name': 'Badanie techniczne', 'verbose_name_plural': 'Badania techniczne'},
        ),
        migrations.AlterModelOptions(
            name='vehiculecard',
            options={'verbose_name': 'Karta pojazdu', 'verbose_name_plural': 'Karty pojazdów'},
        ),
        migrations.RemoveField(
            model_name='vehicule',
            name='owner',
        ),
        migrations.AlterField(
            model_name='vehicule',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vehicule', to=settings.AUTH_USER_MODEL),
        ),
    ]
