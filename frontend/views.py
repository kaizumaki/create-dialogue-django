from django.template.context_processors import csrf
from django.shortcuts import render


def index(request):
    c = dict(csrf(request))
    return render(request, 'frontend/index.html', c)
