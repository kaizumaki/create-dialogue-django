from django.http import HttpResponseForbidden, HttpResponse
from linebot.exceptions import InvalidSignatureError
from linebot.models import (
    MessageEvent, TextMessage, FollowEvent, UnfollowEvent,
    TextSendMessage, ImageMessage, AudioMessage
)
from linebot import LineBotApi, WebhookHandler
import environ
import requests


env = environ.Env(DEBUG=(bool, False))

line_bot_api = LineBotApi(channel_access_token=env('CHANNEL_ACCESS_TOKEN'))
handler = WebhookHandler(channel_secret=env('LINE_ACCESS_SECRET'))


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
    r = requests.get('http://tk2-405-43846.vs.sakura.ne.jp/api/v1/questions/1/answers/1/')
    line_bot_api.reply_message(
        event.reply_token,
        TextSendMessage(text=r.answer_texts[1])
    )
