from django.db      import models
from django.conf    import settings
from django.urls    import reverse

class Anno(models.Model):

    slug                    = models.SlugField( max_length=255, unique=True )
    anno                    = models.IntegerField( default=2000)
    preview                 = models.ImageField(    null=True,
                                                    blank=True,
                                                    upload_to='images/preview/')
    title                   = models.CharField( max_length=240,
                                                null=True,
                                                blank=True)
    color                   = models.CharField( max_length=240,
                                                null=True,
                                                blank=True)
    content                 = models.TextField( max_length=240,
                                                null=True,
                                                blank=True)

    def __str__(self):
        return str(self.anno)

    class Meta:
        verbose_name = "Anno"
        verbose_name_plural = "Anni"


class Evento(models.Model):
    slug                    = models.SlugField( max_length=255, unique=True )
    created_at              = models.DateTimeField( auto_now_add=True)
    updated_at              = models.DateTimeField( auto_now=True)
    author                  = models.ForeignKey(settings.AUTH_USER_MODEL,
                                            on_delete=models.CASCADE,
                                            related_name="eventi")
    title                   = models.CharField( max_length=240)
    content                 = models.TextField( max_length=240)
#    annoRif                 = models.ForeignKey(Anno,
#                                            on_delete=models.CASCADE,
#                                            related_name="eventi",
#                                            )
    datainizio              = models.DateTimeField(blank=True)
    datafine                = models.DateTimeField(null=True,blank=True)
    luogo                   = models.CharField( max_length=240)
    partecipants            = models.IntegerField( default=0)
    fotografieconteggio     = models.IntegerField( default=0)
    preview                 = models.ImageField(    null=True,
                                                    blank=True,
                                                    upload_to='images/preview/')
    anno                    = models.IntegerField(null=True,blank=True)
#    anno                    = models.ForeignKey(Anno,
#                                        on_delete=models.CASCADE,
#                                        related_name="eventianno")
    def __str__(self):
        return self.content
# da creare view evento-detail
    def get_absolute_url(self):
        return reverse('evento-detail', kwargs={'pk': self.pk})
    class Meta:
        verbose_name = "Evento"
        verbose_name_plural = "Eventi"


class EventoFoto(models.Model):

    created_at      = models.DateTimeField(auto_now_add=True,null=True)
    updated_at      = models.DateTimeField(auto_now=True,null=True)

    author          = models.ForeignKey(settings.AUTH_USER_MODEL,
                                        on_delete=models.CASCADE,
                                        null=True)
    evento          = models.ForeignKey(Evento,
                                        on_delete=models.CASCADE,
                                        related_name="fotografieevento")
    isFirst         = models.BooleanField(default=False,null=True)

    descrizione     = models.CharField(max_length=240)
    data            = models.DateTimeField(null=True,   blank=True)
    luogo           = models.CharField( max_length=240, blank=True)
    picture         = models.ImageField(null=True,      blank=True, upload_to='images/')


    def __str__(self):
        return self.descrizione

    class Meta:
        verbose_name = "Illustrazione"
        verbose_name_plural = "Illustrazioni"



class Scatti(models.Model):
    descrizione     = models.CharField(max_length=240)
    picture         = models.FileField(blank=False, null=False, upload_to='images/')

    def __str__(self):
        return self.picture.name

    class Meta:
        verbose_name = "Scatto"
        verbose_name_plural = "Scatti"


class Photo(models.Model):
    descrizione     = models.CharField(max_length=240)
    picture         = models.FileField(blank=False, null=False, upload_to='images/')

    def __str__(self):
        return self.picture.name

    class Meta:
        verbose_name = "Photo"
        verbose_name_plural = "Photos"




class PhotoPlus(models.Model):
    descrizione     = models.CharField(max_length=240)
    picture         = models.FileField(blank=False, null=False, upload_to='images/')
    evento          = models.ForeignKey(Evento,
                                        on_delete=models.CASCADE,
                                        related_name="PhotoPlusEvento")

    def __str__(self):
        return self.picture.name

    class Meta:
        verbose_name = "PhotoPlus"
        verbose_name_plural = "PhotosPlus"