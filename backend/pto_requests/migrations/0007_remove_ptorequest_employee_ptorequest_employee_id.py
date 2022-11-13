# Generated by Django 4.1.3 on 2022-11-13 16:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0006_alter_employee_pto_balance'),
        ('pto_requests', '0006_remove_ptorequest_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ptorequest',
            name='employee',
        ),
        migrations.AddField(
            model_name='ptorequest',
            name='employee_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='employees.employee'),
        ),
    ]
