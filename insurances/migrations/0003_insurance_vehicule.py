# Generated by Django 3.0.4 on 2020-06-05 20:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vehicules', '0004_auto_20200603_2107'),
        ('insurances', '0002_remove_insurance_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='insurance',
            name='vehicule',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='vehicules.Vehicule'),
        ),
    ]
