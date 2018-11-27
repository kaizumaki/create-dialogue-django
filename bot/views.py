from django.http import HttpResponseForbidden, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from linebot.exceptions import InvalidSignatureError
from linebot.models import (
    MessageEvent, TextMessage, FollowEvent, UnfollowEvent,
    TextSendMessage, ImageMessage, AudioMessage
)
from linebot import LineBotApi, WebhookHandler
from rest_framework.test import APIClient
from django.conf import settings

line_bot_api = LineBotApi(channel_access_token=settings.CHANNEL_ACCESS_TOKEN)
handler = WebhookHandler(channel_secret=settings.LINE_ACCESS_SECRET)


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
    line_bot_api.reply_message(
        event.reply_token,
        TextSendMessage(text=reply_text(event))
    )


def reply_text(event):
    client = APIClient()
    responses = client.get('/api/v1/answers/2/')
    answer = responses.json()
    answer_text = str(answer['answer_texts'][0])
    # answer_text = event.message.text
    return answer_text
