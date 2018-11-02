from rest_framework import serializers
from .models import Question, Answer, Keyword


class KeywordCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = ('keyword_id', 'answer_id', 'word', 'weight')

    def create(self, validated_data):
        instance = Keyword.objects.create(**validated_data)
        return instance


class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = ('keyword_id', 'word', 'weight')


class AnswerCreateSerializer(serializers.ModelSerializer):
    keywords = KeywordSerializer(many=True, required=False, allow_null=True)

    class Meta:
        model = Answer
        fields = ('answer_id', 'question_id', 'answer_text', 'keywords')

    def create(self, validated_data):
        instance = Answer.objects.create(**validated_data)
        return instance


class AnswerSerializer(serializers.ModelSerializer):
    keywords = KeywordSerializer(many=True, required=False, allow_null=True)

    class Meta:
        model = Answer
        fields = ('answer_id', 'answer_text', 'keywords')


class QuestionCreateSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, required=False, allow_null=True)

    class Meta:
        model = Question
        fields = ('question_id', 'question_text', 'parent_id', 'answers')

    def create(self, validated_data):
        instance = Question.objects.create(**validated_data)
        return instance


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, required=False, allow_null=True)

    class Meta:
        model = Question
        fields = ('question_id', 'question_text', 'parent_id', 'answers')
