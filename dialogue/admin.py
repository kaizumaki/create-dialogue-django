from django.contrib import admin
from .models import Question, Answer, Keyword


class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question_id', 'question_text', 'parent_answer_id', 'created_date', 'modified_date')
    search_fields = ['question_text']


class AnswerAdmin(admin.ModelAdmin):
    list_display = ('answer_id', 'question_id', 'answer_texts', 'created_date', 'modified_date')
    list_filter = ['question_id__question_id']
    search_fields = ['answer_texts']


class KeywordAdmin(admin.ModelAdmin):
    list_display = ('keyword_id', 'answer_id', 'word', 'weight', 'created_date', 'modified_date')
    list_filter = ['answer_id__answer_id']
    search_fields = ['word']


admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer, AnswerAdmin)
admin.site.register(Keyword, KeywordAdmin)
