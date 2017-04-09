from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from .models import User, Room


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

    context = {
        'room': room,
        'users': users
    }

    return render(request, 'chat.html', context=context)