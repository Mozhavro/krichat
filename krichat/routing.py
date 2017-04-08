from channels.routing import route

channel_routing = {
    'websocket.connect': 'chat.consumers.kri_connect',
    'websocket.receive': 'chat.consumers.kri_message',
    'websocket.disconnect': 'chat.consumers.kri_disconnect',
}