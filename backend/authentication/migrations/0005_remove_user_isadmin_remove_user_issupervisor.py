# Generated by Django 4.1.3 on 2023-01-09 00:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0004_rename_is_admin_user_isadmin_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='isAdmin',
        ),
        migrations.RemoveField(
            model_name='user',
            name='isSupervisor',
        ),
    ]
