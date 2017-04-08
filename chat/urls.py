from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^chat/$', views.chat_index)
]