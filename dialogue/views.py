from rest_framework import viewsets, filters
from rest_framework.generics import get_object_or_404
from .models import Question, Answer, Keyword
from .serializer import QuestionSerializer, AnswerSerializer, KeywordSerializer


class QuestionViewSet(viewsets.ViewSet):
    serializer_class = QuestionSerializer

    def list(self, request):
        queryset = Question.objects.filter()
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Question.objects.filter()
        question = get_object_or_404(queryset, pk=pk)
        serializer = QuestionSerializer(question)
        return Response(serializer.data)


class AnswerViewSet(viewsets.ViewSet):
    serializer_class = AnswerSerializer

    def list(self, request, question_id=None):
        queryset = Answer.objects.filter(question=question_id)
        serializer = AnswerSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, question_id=None):
        queryset = Answer.objects.filter(pk=pk, question=question_id)
        answer = get_object_or_404(queryset, pk=pk)
        serializer = AnswerSerializer(answer)
        return Response(serializer.data)


class KeywordViewSet(viewsets.ViewSet):
    serializer_class = KeywordSerializer

    def list(self, request, question_id=None, answer_id=None):
        queryset = Keyword.objects.filter(mail_drop__question=question_id, mail_drop=answer_id)
        serializer = KeywordSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, question_id=None, answer_id=None):
        queryset = Keyword.objects.filter(pk=pk, mail_drop=answer_id, mail_drop__question=question_id)
        answer = get_object_or_404(queryset, pk=pk)
        serializer = KeywordSerializer(answer)
        return Response(serializer.data)
