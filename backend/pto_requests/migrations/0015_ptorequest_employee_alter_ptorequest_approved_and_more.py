# Generated by Django 4.1.3 on 2023-01-10 22:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0021_employee_user'),
        ('pto_requests', '0014_remove_ptorequest_employee'),
    ]

    operations = [
        migrations.AddField(
            model_name='ptorequest',
            name='employee',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='employees.employee'),
        ),
        migrations.AlterField(
            model_name='ptorequest',
            name='approved',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='ptorequest',
            name='date_requested',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='ptorequest',
            name='hours_requested',
            field=models.DecimalField(decimal_places=4, max_digits=7, null=True),
        ),
    ]
