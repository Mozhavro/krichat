from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.chat_index),
    url(r'^auth/$', views.chat_auth),
]