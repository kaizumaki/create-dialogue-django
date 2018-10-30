from django.db import models
from django_mysql.models import ListTextField


class Question(models.Model):
    class Meta:
        db_table = 'question'

    question_id = models.AutoField(primary_key=True)
    author = models.ForeignKey('auth.User', on_delete=models.PROTECT)
    question_text = models.TextField()
    parent_id = models.IntegerField(null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.question_id)


class Answer(models.Model):
    class Meta:
        db_table = 'answer'

    answer_id = models.AutoField(primary_key=True)
    question_id = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    answer_text = ListTextField(base_field=models.CharField(max_length=255), size=10)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.answer_id)


class Keyword(models.Model):
    class Meta:
        db_table = 'keyword'

    keyword_id = models.AutoField(primary_key=True)
    answer_id = models.ForeignKey(Answer, related_name='keywords', on_delete=models.CASCADE)
    word = models.CharField(max_length=50)
    weight = models.FloatField()
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.keyword_id)
