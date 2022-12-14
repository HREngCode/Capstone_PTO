# Generated by Django 4.1.3 on 2023-01-09 02:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0018_employee_isadmin_employee_issupervisor'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='supervisor',
        ),
        migrations.AddField(
            model_name='employee',
            name='supervisor_number',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='isAdmin',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='isSupervisor',
            field=models.BooleanField(null=True),
        ),
    ]
