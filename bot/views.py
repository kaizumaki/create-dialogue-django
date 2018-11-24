from django.http import HttpResponseForbidden, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from linebot.exceptions import InvalidSignatureError
from linebot.models import (
    MessageEvent, TextMessage, FollowEvent, UnfollowEvent,
    TextSendMessage, ImageMessage, AudioMessage
)
from linebot import LineBotApi, WebhookHandler
import environ
import os
from rest_framework.test import APIClient
from django.urls import reverse


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env = environ.Env(DEBUG=(bool, False))
environ.Env.read_env(os.path.join(BASE_DIR, '../env/production/.env'))

line_bot_api = LineBotApi(channel_access_token=env('CHANNEL_ACCESS_TOKEN'))
handler = WebhookHandler(channel_secret=env('LINE_ACCESS_SECRET'))

reverse('dialogue')
client = APIClient()
response = client.get('/api/v1/questions/1/answers/1/')
answer = response.json()


@csrf_exempt
def callback(request):
    signature = request.META['HTTP_X_LINE_SIGNATURE']
    body = request.body.decode('utf-8')
    try:
        handler.handle(body, signature)
    except InvalidSignatureError:
        return HttpResponseForbidden()
    return HttpResponse('OK')


@handler.add(FollowEvent)
def handle_follow(event):
    line_bot_api.reply_message(
        event.reply_token,
        TextSendMessage(text='初めまして')
    )


@handler.add(MessageEvent, message=TextMessage)
def handle_text_message(event):
    # r = requests.get('https://kaizumaki.net/api/v1/questions/1/answers/1/')
    line_bot_api.reply_message(
        event.reply_token,
        TextSendMessage(text=answer['answer_texts'][0])
    )
