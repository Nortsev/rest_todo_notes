import datetime
from django.db import models
from authapp.models import User


class Project(models.Model):
    name = models.CharField(max_length=64)
    url = models.URLField()
    users = models.OneToOneField(User, on_delete=models.CASCADE)


class Todo(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    text = models.TextField(blank=True, null=True)
    date_create = models.DateTimeField(auto_now_add=True)
    date_update = models.DateTimeField(default=datetime.datetime.now())
    is_active = models.BooleanField(default=True)
    authors = models.ManyToManyField(User)