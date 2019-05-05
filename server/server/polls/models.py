from django.db import models
from server.generics.models import BaseModel 

# Create your models here.

class Poll(BaseModel):
    title = models.CharField(max_length=255) 
    desc = models.TextField()


class PollChoice(BaseModel):
    poll = models.OneToOneField(Poll , on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)