# Generated by Django 4.1.3 on 2022-12-29 01:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0015_remove_employee_active_remove_employee_department_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='employee_number',
        ),
    ]