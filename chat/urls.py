from django.conf.urls import url
from . import views
from django.contrib import admin
from django.contrib.auth import views as auth_views

urlpatterns = [
    url(r'^$', views.chat_index),
    # url(r'^auth/$', views.chat_auth),

    #auth
    url(r'^accounts/login/$', auth_views.login, name='login'),
    url(r'^accounts/logout/$', auth_views.logout, name='logout'),
    url(r'^admin/', admin.site.urls),
]