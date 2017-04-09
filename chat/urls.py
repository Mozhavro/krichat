from . import views
from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth import views as auth_views

urlpatterns = [

	url('', include('pwa.urls')),
    url(r'^$', views.chat_index, name='index'),
    # url(r'^auth/$', views.chat_auth),

    #auth
    url(r'^accounts/', include('registration.backends.simple.urls')),
    url(r'^accounts/login/$', auth_views.login, name='login'),
    url(r'^accounts/logout/$', auth_views.logout, name='logout'),
    url(r'^admin/', admin.site.urls),
]