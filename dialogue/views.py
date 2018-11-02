from rest_framework import viewsets, filters, generics
from rest_framework.response import Response
from .models import Question, Answer, Keyword
from .serializer import QuestionCreateSerializer, QuestionSerializer, AnswerCreateSerializer, AnswerSerializer, KeywordCreateSerializer, KeywordSerializer


class QuestionViewSet(viewsets.ViewSet, generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def list(self, request):
        queryset = Question.objects.filter()
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Question.objects.filter()
        question = generics.get_object_or_404(queryset, pk=pk)
        serializer = QuestionSerializer(question)
        return Response(serializer.data)

    def create(self, request, pk=None, *args, **kwargs):
        write_serializer = QuestionCreateSerializer(data=request.data)
        write_serializer.is_valid(raise_exception=True)
        instance = self.perform_create(write_serializer)
        read_serializer = QuestionSerializer(instance)
        return Response(read_serializer.data)


class AnswerViewSet(viewsets.ViewSet, generics.ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    def list(self, request, question_pk=None):
        queryset = Answer.objects.filter(question_id=question_pk)
        serializer = AnswerSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, question_pk=None):
        queryset = Answer.objects.filter(pk=pk, question_id=question_pk)
        answer = generics.get_object_or_404(queryset, pk=pk)
        serializer = AnswerSerializer(answer)
        return Response(serializer.data)

    def create(self, request, question_pk=None, *args, **kwargs):
        _mutable = request.data._mutable
        request.data._mutable = True
        request.data['question_id'] = question_pk
        request.data._mutable = _mutable
        write_serializer = AnswerCreateSerializer(data=request.data)
        write_serializer.is_valid(raise_exception=True)
        instance = self.perform_create(write_serializer)
        read_serializer = AnswerSerializer(instance)
        return Response(read_serializer.data)


class KeywordViewSet(viewsets.ViewSet, generics.ListCreateAPIView):
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

    def create(self, request, question_pk=None, answer_pk=None, *args, **kwargs):
        _mutable = request.data._mutable
        request.data._mutable = True
        request.data['answer_id'] = answer_pk
        request.data._mutable = _mutable
        write_serializer = KeywordCreateSerializer(data=request.data)
        write_serializer.is_valid(raise_exception=True)
        instance = self.perform_create(write_serializer)
        read_serializer = KeywordSerializer(instance)
        return Response(read_serializer.data)
