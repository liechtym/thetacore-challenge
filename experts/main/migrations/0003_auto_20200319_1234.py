# Generated by Django 3.0.4 on 2020-03-19 19:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20200319_1226'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Experts',
            new_name='Expert',
        ),
        migrations.RenameModel(
            old_name='Friendships',
            new_name='Friendship',
        ),
    ]
