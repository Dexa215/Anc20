from django.urls                import include, path
from rest_framework.routers     import DefaultRouter
from django.views.generic.dates import ArchiveIndexView

import evidenza.api.views as eV

from .views                     import (EvidenzaModelViewSet)
from ..models                   import (Evidenza)


#binding esplicito... sostituito dal lavoro del router
#profile_list    = ProfileViewSet.as_view({"get": "list"})
#profile_detail  = ProfileViewSet.as_view({"get": "retrieve"})

#/api/events/ -->

router = DefaultRouter()
router.register(r"",EvidenzaModelViewSet)

urlpatterns     =   [
#- events - gestito dal router -------------------------------------------------

    path("", include(router.urls)),
]

