from django.template import loader  # type: ignore
from django.http import HttpResponse  # type: ignore


def members(request):
    template = loader.get_template("myfirstpage.html")
    return HttpResponse(template.render())
