from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Chatter(models.Model):
    user 		= models.OneToOneField(User, on_delete=models.CASCADE)
    logout_date = models.DateTimeField()

class Room(models.Model):
	title 		= models.CharField(max_length=100)
	chatters 	= models.ManyToManyField('chat.Chatter')

class Message(models.Model):
	sender 		= models.ForeignKey('chat.Chatter')
	room 		= models.ForeignKey('chat.Room')
	text 		= models.CharField(max_length=1000)
	is_loud		= models.BooleanField(default=True)
	date 		= models.DateTimeField(auto_now_add=True)
