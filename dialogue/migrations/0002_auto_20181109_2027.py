# Generated by Django 2.1.3 on 2018-11-09 11:27

from django.db import migrations, models
import django.utils.timezone
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('dialogue', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='answer',
            name='answer_texts',
        ),
        migrations.AddField(
            model_name='answer',
            name='answer_text',
            field=django_mysql.models.ListTextField(models.CharField(max_length=255), default=django.utils.timezone.now, size=10),
            preserve_default=False,
        ),
    ]
