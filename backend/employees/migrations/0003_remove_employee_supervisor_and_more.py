# Generated by Django 4.1.3 on 2022-11-11 01:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0002_employee_pto_balance'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='supervisor',
        ),
        migrations.AlterField(
            model_name='employee',
            name='pto_balance',
            field=models.DecimalField(decimal_places=4, max_digits=5),
        ),
    ]
