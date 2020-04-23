# Generated by Django 3.0.4 on 2020-04-22 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reg_number', models.CharField(max_length=15, verbose_name='Number rejestracji')),
                ('car_typ', models.CharField(max_length=30, verbose_name='Typ pojazdu')),
                ('car_brand', models.CharField(max_length=30, verbose_name='Marka pojazdu')),
                ('car_model', models.CharField(max_length=50, verbose_name='Model pojazdu')),
                ('vin', models.CharField(max_length=17, verbose_name='Numer Vin')),
                ('first_reg', models.DateField(verbose_name='Data pierwszej rejestracji')),
            ],
            options={
                'verbose_name': 'Samochód',
                'verbose_name_plural': 'Samochody',
                'ordering': ['reg_number'],
            },
        ),
    ]