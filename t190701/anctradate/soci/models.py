from django.db                      import models
from django.contrib.auth.models     import User
from django.conf                    import settings
from django.urls                    import reverse

class Grado(models.Model):
    grado = models.CharField(max_length=240, blank=True)
    
    class Meta:
        verbose_name_plural = "Gradi"

    def __str__(self):
        return self.grado


class Socio(models.Model):
    attivo = models.BooleanField

    author          =   models.ForeignKey(
                        settings.AUTH_USER_MODEL,
                        on_delete=models.CASCADE,
                        related_name="SociRegistrati")
    
    nome            =   models.CharField(max_length=240, blank=True)
    cognome         =   models.CharField(max_length=240, blank=True)
    nascitacity     =   models.CharField(max_length=240, blank=True)
    nascitadata     =   models.DateTimeField()

    decedutodata    = models.DateTimeField(null=True, blank=True)

    residenza       =   models.CharField(max_length=30, blank=True)
    tessera         =   models.CharField(max_length=30, blank=True)
    gradoinservizio =   models.ForeignKey(Grado, on_delete=models.CASCADE, null=True)
    congedodata     =   models.DateTimeField()
    congedoreparto  =   models.DateTimeField()

    socioemail      =   models.EmailField(max_length=254)


    class Meta:
        verbose_name_plural = "soci"

    def __str__(self):
        return str(self.cognome)
        


class Carica(models.Model):

    definizione     = models.CharField(max_length=240)
    rango           = models.IntegerField()

    class Meta:
        verbose_name_plural = "cariche"

    def __str__(self):
        return str(self.definizione)


class CaricaStorico(models.Model):
    Socio       =   models.ForeignKey(      Socio, 
                                            on_delete=models.CASCADE, 
                                            null=True,
                                            related_name="Cariche")
    Carica      =   models.ForeignKey(      Carica,
                                            on_delete=models.CASCADE, 
                                            null=True,
                                            related_name="Storico")
    incaricadal =   models.DateTimeField()
    incaricaal  =   models.DateTimeField()
    corrente    =   models.BooleanField

    class Meta:
        verbose_name_plural = "storicocariche"

