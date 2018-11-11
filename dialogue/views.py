from rest_framework import viewsets, filters, generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from .models import Question, Answer, Keyword
from .serializer import QuestionSerializer, AnswerSerializer, KeywordSerializer


class QuestionViewSet(viewsets.ViewSet, generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def list(self, request):
        queryset = Question.objects.filter()
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Question.objects.filter(pk=pk)
        question = generics.get_object_or_404(queryset, pk=pk)
        serializer = QuestionSerializer(question)
        return Response(serializer.data)


class AnswerViewSet(viewsets.ViewSet, generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    def list(self, request, question_pk=None):
        queryset = Answer.objects.filter(question_id=question_pk)
        serializer = AnswerSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, question_pk=None):
        queryset = Answer.objects.filter(pk=pk, question_id=question_pk)
        question = generics.get_object_or_404(queryset, pk=pk)
        serializer = AnswerSerializer(question)
        return Response(serializer.data)


class KeywordViewSet(viewsets.ViewSet, generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Keyword.objects.all()
    serializer_class = KeywordSerializer

    def list(self, request, question_pk=None, answer_pk=None):
        queryset = Keyword.objects.filter(answer_id__question_id=question_pk, answer_id=answer_pk)
        serializer = KeywordSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, question_pk=None, answer_pk=None):
        queryset = Keyword.objects.filter(pk=pk, answer_id__question_id=question_pk, answer_id=answer_pk)
        answer = generics.get_object_or_404(queryset, pk=pk)
        serializer = KeywordSerializer(answer)
        return Response(serializer.data)
