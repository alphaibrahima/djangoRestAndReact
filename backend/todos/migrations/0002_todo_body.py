# Generated by Django 4.0.2 on 2022-02-19 23:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='body',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]