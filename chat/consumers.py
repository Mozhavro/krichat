import json

from channels.auth import http_session_user, channel_session_user, channel_session_user_from_http 
from channels.channel import Group

http_user = True

@channel_session_user_from_http  
def kri_connect(message):
    Group('chat').add(message.reply_channel)
    message.reply_channel.send({"accept": True})

@channel_session_user
def kri_message(message):
    Group('chat').send({'text': json.dumps({'message': message.content['text'],
                                            'sender': message.user.username})})

@channel_session_user
def kri_disconnect(message):
    Group('chat').discard(message.reply_channel)