from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer
from .models import Question, Answer, Keyword


class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = ('keyword_id', 'answer_temp_id', 'keyword_temp_id', 'word', 'weight')


class AnswerSerializer(WritableNestedModelSerializer):
    keywords = KeywordSerializer(many=True, required=False, allow_null=True)
    # answer_text = serializers.JSONField(True)

    class Meta:
        model = Answer
        fields = ('answer_id', 'answer_temp_id', 'answer_text', 'keywords')


class QuestionSerializer(WritableNestedModelSerializer):
    answers = AnswerSerializer(many=True, required=False, allow_null=True)

    class Meta:
        model = Question
        fields = ('question_id', 'question_text', 'parent_id', 'answers')
