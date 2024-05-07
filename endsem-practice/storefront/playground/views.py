from django.shortcuts import render
from django.http import HttpResponse
from .models import TodoItem


def say_hello(request):
    return render(request, "hello.html", {"name": "harsh"})


def todos(request):
    items = TodoItem.objects.all()
    return render(request, "todos.html", {"todos": items})
