# Generated by Django 3.2.4 on 2021-08-20 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('nombre', models.CharField(blank=True, max_length=50, null=True, verbose_name='nombre')),
                ('username', models.CharField(max_length=50, null=True, unique=True, verbose_name='nombre de usuario')),
                ('password', models.CharField(max_length=50, null=True, verbose_name='Contraseña')),
                ('perfil', models.ImageField(max_length=200, upload_to='img/', verbose_name='imagen de perfil')),
                ('telefono', models.CharField(max_length=20, null=True, verbose_name='numero telefonico')),
                ('email', models.EmailField(blank=True, max_length=50, null=True, verbose_name='correo de usuario')),
                ('linkedin', models.CharField(max_length=200, unique=True, verbose_name='linkedin')),
                ('instagram', models.CharField(max_length=200, unique=True, verbose_name='instagram')),
                ('github', models.CharField(max_length=200, unique=True, verbose_name='github')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]