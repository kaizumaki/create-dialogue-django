# Generated by Django 2.1.2 on 2018-10-30 11:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dialogue', '0003_auto_20181030_2011'),
    ]

    operations = [
        migrations.RenameField(
            model_name='answer',
            old_name='text',
            new_name='answer_text',
        ),
        migrations.RenameField(
            model_name='question',
            old_name='text',
            new_name='question_text',
        ),
    ]
