# Generated by Django 4.1.3 on 2023-01-07 00:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0017_employee_active_employee_department_and_more'),
        ('pto_requests', '0012_ptorequest_approved_alter_ptorequest_hours_requested'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ptorequest',
            name='approved',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='ptorequest',
            name='date_requested',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='ptorequest',
            name='employee',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='employees.employee'),
        ),
        migrations.AlterField(
            model_name='ptorequest',
            name='hours_requested',
            field=models.DecimalField(decimal_places=4, max_digits=7),
        ),
    ]
