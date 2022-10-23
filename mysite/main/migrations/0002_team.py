# Generated by Django 4.1.2 on 2022-10-23 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('team_id', models.IntegerField()),
                ('team_name', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('year_founded', models.IntegerField()),
            ],
        ),
    ]