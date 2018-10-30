from rest_framework import serializers
from .models import Question, Answer, Keyword


class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = ('keyword_id', 'word', 'weight')


class AnswerSerializer(serializers.ModelSerializer):
    keywords = KeywordSerializer(many=True)

    class Meta:
        model = Answer
        fields = ('answer_id', 'answer_text', 'keywords')


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)

    class Meta:
        model = Question
        fields = ('question_id', 'question_text', 'parent_id', 'answers')
