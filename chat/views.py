from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from .models import User, Room, Message


@login_required
def chat(request):
    return render(request, 'chat.html')


@login_required
def chat_room(request, slug='/'):

    room, created = Room.objects.get_or_create(
        title=slug
    )

    room.chatters.add(request.user)

    users = room.chatters.all()
    msgs = Message.objects.filter(room=room)
    print(vars(msgs))

    context = {
        'room': room,
        'users': users,
        'messages': msgs,
    }

    return render(request, 'chat.html', context=context)