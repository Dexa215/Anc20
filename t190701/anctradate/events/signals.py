from django.db.models.signals   import pre_save
from django.dispatch            import receiver
from django.utils.text          import slugify

from core.utils                 import generate_random_string
from events.models              import Evento

@receiver(pre_save, sender=Evento)
def add_slug_to_evento(sender, instance, *args, **kwargs):
    if instance and not instance.slug:
        slug = slugify(instance.content)
        print ("slugify... ", slug)
        random_string = generate_random_string()
        instance.slug = slug + "-" + random_string
