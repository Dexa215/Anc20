from django.db import models
# Create your models here.


class Evidenza(models.Model):

    slug = models.SlugField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=240)

    datainizio = models.DateTimeField(blank=True)
    luogo = models.CharField(max_length=240)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Evidenza"
        verbose_name_plural = "Evidenze"
