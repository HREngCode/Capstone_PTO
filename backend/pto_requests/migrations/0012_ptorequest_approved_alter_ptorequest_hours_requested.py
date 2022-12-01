# Generated by Django 4.1.3 on 2022-11-30 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pto_requests', '0011_ptorequest_date_requested'),
    ]

    operations = [
        migrations.AddField(
            model_name='ptorequest',
            name='approved',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='ptorequest',
            name='hours_requested',
            field=models.DecimalField(decimal_places=4, max_digits=7, null=True),
        ),
    ]
