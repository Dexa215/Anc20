
import datetime
import json

from django.core                import serializers
from django.http                import Http404,JsonResponse
from django.shortcuts           import get_object_or_404
from django.views.generic.dates import YearArchiveView
from evidenza                   import models

from rest_framework             import generics, status
from rest_framework             import mixins
from rest_framework             import viewsets
from rest_framework.filters     import SearchFilter
# Permissions--------------------------------------------------------------------
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets    import (ModelViewSet,
                                     ReadOnlyModelViewSet)

from rest_framework.views       import APIView
from rest_framework.response    import Response
from rest_framework             import status

from rest_framework.parsers     import FileUploadParser, MultiPartParser, FormParser

from rest_framework.response    import Response
from rest_framework.views       import APIView
from rest_framework             import status

# Permissions--------------------------------------------------------------------
from .permissions               import IsStaffOrReadOnly
# Serializers--------------------------------------------------------------------
from .serializers               import (EvidenzaSerializer)
# Models-------------------------------------------------------------------------
from ..models                   import (Evidenza)


#viewsets-----------------------------------------------------------------------
#-------------------------------------------------------------------------------
class EvidenzaModelViewSet(ModelViewSet):
    queryset            = Evidenza.objects.all().order_by("-created_at")
    serializer_class    = EvidenzaSerializer
    permission_classes  = [IsAuthenticated, IsStaffOrReadOnly]
    lookup_field        = "slug"