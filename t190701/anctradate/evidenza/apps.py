from django.apps import AppConfig


class EvidenzaConfig(AppConfig):
    name = 'evidenza'


    def ready(self):
        import evidenza.signals
