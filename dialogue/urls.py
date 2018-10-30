from rest_framework import routers
from .views import QuestionViewSet, AnswerViewSet, KeywordViewSet


router = routers.DefaultRouter()
router.register(r'questions', QuestionViewSet)
router.register(r'answers', AnswerViewSet)
router.register(r'keywords', KeywordViewSet)
