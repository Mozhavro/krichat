from . import views
from django.conf.urls import include, url

urlpatterns = [
    url('', include('pwa.urls')),

    url(r'^$', views.chat_room, name='index'),

    url(r'^(?P<slug>[-\w]+)/$', views.chat_room),
]