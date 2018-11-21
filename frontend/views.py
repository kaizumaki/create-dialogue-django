from django.template.context_processors import csrf
from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required
def index(request):
    c = dict(csrf(request))
    return render(request, 'frontend/index.html', c)
