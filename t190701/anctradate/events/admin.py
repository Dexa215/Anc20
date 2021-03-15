from django.contrib import admin
from .models import Evento, EventoFoto, Anno, Scatti, Photo, PhotoPlus

admin.site.register(Anno)
admin.site.register(Evento)
admin.site.register(EventoFoto)
admin.site.register(Scatti)
admin.site.register(Photo)
admin.site.register(PhotoPlus)