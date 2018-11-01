from rest_framework_nested import routers
from django.urls import path, include
from .views import QuestionViewSet, AnswerViewSet, KeywordViewSet


router = routers.DefaultRouter()
router.register(r'questions', QuestionViewSet, base_name='questions')

questions_router = routers.NestedSimpleRouter(router, r'questions', lookup='question')
questions_router.register(r'answers', AnswerViewSet, base_name='answers')

answers_router = routers.NestedSimpleRouter(questions_router, r'answers', lookup='answer')
answers_router.register(r'keywords', KeywordViewSet, base_name='keywords')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(questions_router.urls)),
    path('', include(answers_router.urls)),
]
