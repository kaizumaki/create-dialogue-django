from rest_framework_nested import routers
from django.urls import path, include
from .views import QuestionViewSet, AnswerViewSet, KeywordViewSet, AnswerDisplayViewSet, KeywordDisplayViewSet, KeywordRelatedAnswerViewSet


router = routers.DefaultRouter()
router.register(r'questions', QuestionViewSet, base_name='questions')
router.register(r'answers', AnswerDisplayViewSet, base_name='answers')
router.register(r'keywords', KeywordDisplayViewSet, base_name='keywords')

questions_router = routers.NestedSimpleRouter(router, r'questions', lookup='question')
questions_router.register(r'answers', AnswerViewSet, base_name='answers')

answers_router = routers.NestedSimpleRouter(questions_router, r'answers', lookup='answer')
answers_router.register(r'keywords', KeywordViewSet, base_name='keywords')

answers_keyword_router = routers.NestedSimpleRouter(router, r'answers', lookup='answer')
answers_keyword_router.register(r'keywords', KeywordRelatedAnswerViewSet, base_name='keywords')

app_name = 'dialogue'
urlpatterns = [
    path('', include(router.urls, namespace='route')),
    path('', include(questions_router.urls)),
    path('', include(answers_router.urls)),
    path('', include(answers_keyword_router.urls)),
]
