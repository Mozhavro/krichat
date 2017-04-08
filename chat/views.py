from django.shortcuts import render

def chat_index(request):
    return render(request, 'chat.html')

def chat_auth(request):
    return render(request, 'auth.html')
