from soci.models            import (    Socio,
                                        Grado,
                                        CaricaStorico,
                                        Carica,
                                                                    )
from soci.api.permissions   import (    IsOwnProfileOrReadOnly,
                                            IsOwnerOrReadOnly       )
from soci.api.serializers   import (    SocioSerializer             )
from rest_framework             import      generics
from rest_framework             import      mixins
from rest_framework             import      viewsets
from rest_framework.filters     import      SearchFilter
from rest_framework.permissions import      (IsAuthenticated)

from rest_framework.viewsets    import (    ModelViewSet,
                                            ReadOnlyModelViewSet
                                                                        )

from django.contrib.auth.models import User
import requests

from django.http        import JsonResponse


class SocioModelViewSet(ModelViewSet):
    queryset            = Socio.objects.all().order_by("cognome")
    serializer_class    = SocioSerializer
    permission_classes  = [IsAuthenticated]

    def perform_create(self, serializer):
            serializer.save(author=self.request.user)
