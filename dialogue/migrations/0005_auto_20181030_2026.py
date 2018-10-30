# Generated by Django 2.1.2 on 2018-10-30 11:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dialogue', '0004_auto_20181030_2013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='question_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dialogue.Question'),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='answer_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dialogue.Answer'),
        ),
    ]
