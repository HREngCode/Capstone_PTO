# Generated by Django 4.1.3 on 2022-12-28 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0014_employee_active'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='active',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='department',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='hire_date',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='pto_balance',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='supervisor',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='user',
        ),
        migrations.AlterField(
            model_name='employee',
            name='employee_first_name',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='employee_last_name',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='employee_number',
            field=models.IntegerField(null=True),
        ),
    ]
