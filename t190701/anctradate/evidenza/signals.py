from django.db.models.signals   import pre_save
from django.dispatch            import receiver
from django.utils.text          import slugify

from core.utils                 import generate_random_string
from evidenza.models            import Evidenza

@receiver(pre_save, sender=Evidenza)
def add_slug_to_evento(sender, instance, *args, **kwargs):
    if instance and not instance.slug:
        slug = slugify(instance.title)
        print("slugify... ", slug)
        random_string = generate_random_string()
        instance.slug = slug + "-" + random_string
