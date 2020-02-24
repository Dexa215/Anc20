
import datetime
import json

from django.core                import serializers
from django.http                import Http404,JsonResponse
from django.shortcuts           import get_object_or_404
from django.views.generic.dates import YearArchiveView
from events                     import models

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

from rest_framework.parsers     import FileUploadParser
from rest_framework.response    import Response
from rest_framework.views       import APIView
from rest_framework             import status


# Permissions--------------------------------------------------------------------
from .permissions               import IsStaffOrReadOnly
# Serializers--------------------------------------------------------------------

#from events.api.serializers     import (EventoSerializer,
 #   #                                            EventoYearSerializer,
 #                                   EventoFotoSerializer,
 #                                   EventoFotoPictureSerializer,
 #                                   AnnoSerializer,
 #                               )

from .serializers               import (EventoSerializer,
                                        EventoFotoSerializer,
                                        EventoFotoPictureSerializer,
                                        AnnoSerializer,
                                        ScattiSerializer,
                                        PhotoSerializer,
                                        PhotoPlusSerializer)

#                                       EventoYearSerializer,


# Models-------------------------------------------------------------------------
from ..models                   import (Evento,
                                        EventoFoto,
                                        Anno,
                                        PhotoPlus,
                                        Scatti)

from rest_framework.parsers     import MultiPartParser, FormParser

#< viewsets>-----------------------------------------------------------------------
#Associato router r""-->
#-------------------------------------------------------------------------------
class EventoModelViewSet(ModelViewSet):
    queryset = Evento.objects.all().order_by("-datainizio")
    serializer_class    = EventoSerializer
    permission_classes = [IsAuthenticated,IsStaffOrReadOnly]
    lookup_field        = "slug"
    def perform_create(self, serializer):
            serializer.save(author=self.request.user)
#-------------------------------------------------------------------------------

# class EventoList(generics.ListAPIView):
#    queryset            = Evento.objects.all()
#    serializer_class    = EventoSerializer
#    permission_classes  = [IsAuthenticated]


class EventoListViewSet(ReadOnlyModelViewSet):
    queryset            = Evento.objects.all()
    serializer_class    = EventoSerializer
    permission_classes  = [IsAuthenticated, IsStaffOrReadOnly]

#</viewsets>-----------------------------------------------------------------------


#TEST 2019 07 02

class EventoListAPIView(generics.ListAPIView):
    queryset            = Evento.objects.all().order_by("-created_at")
    serializer_class    = EventoSerializer
    permission_classes  = [IsAuthenticated]

class EventoGenericViewSet( mixins.UpdateModelMixin,
                            mixins.ListModelMixin,
                            mixins.RetrieveModelMixin,
                            mixins.DestroyModelMixin,
                            viewsets.GenericViewSet):

    queryset            = Evento.objects.all().order_by("-created_at")
    serializer_class    = EventoSerializer
    permission_classes  = [IsAuthenticated]

#    filter_backends     = [SearchFilter]
#    search_fields       = ["luogo"]

class EventoFotoPictureWiewSet(ModelViewSet):
    queryset            = EventoFoto.objects.all()
    serializer_class    = EventoFotoSerializer
    permission_classes  = [IsAuthenticated, IsStaffOrReadOnly]
    filter_backends     = [SearchFilter]
    search_fields       = ["luogo","data"]

#-------------------------------------------------------------------------------

#test 2019 07 02 -- OK -- restituisce eventi dell'anno richiesto
class EventoListYearAPIView(generics.ListAPIView):
    serializer_class    = EventoSerializer
    permission_classes  = [IsAuthenticated, IsStaffOrReadOnly]

    def get_queryset(self):
        kwarg_year      = self.kwargs.get("year")

        return Evento.objects.filter(datainizio__year=kwarg_year).order_by("-created_at")

#test 2019 07 03
#to do trasforma int response in json per ottenere la possibilita di usare metodo get_object

def EventoListCountYearsAPIView(request):
    eventsList = Evento.objects.all()
    print(" conteggio eventi: ", eventsList.count())
    data = {"eventsReport": {
        "count": eventsList.count(),
    }}
    response = JsonResponse(data)
    return response

#"<slug:slug>/photos/"
class EventoFotoListAPIView(generics.ListAPIView):
    serializer_class    = EventoFotoSerializer
    permission_classes  = [IsAuthenticated, IsStaffOrReadOnly]
    def get_queryset(self):
        kwarg_slug      = self.kwargs.get("slug")
        return EventoFoto.objects.filter(evento__slug=kwarg_slug).order_by("-created_at")
#----2019 12 09---------------------------------------------------------------------------------------------------------
#"<int:pk>/photosPlus/"
class EventoFotoPlusListAPIView(generics.ListAPIView):
    serializer_class    = PhotoPlusSerializer
    permission_classes  = [IsAuthenticated, IsStaffOrReadOnly]
    def get_queryset(self):
        kwarg_id      = self.kwargs.get("pk")
        return PhotoPlus.objects.filter(evento__id=kwarg_id)
#generics-----------------------------------------------------------------------
#"<slug:slug>/photos/new/"
class EventoFotoPictureCreateAPIView(generics.CreateAPIView):
    queryset            = EventoFoto.objects.all()
    serializer_class    = EventoFotoSerializer
    permission_classes  = [IsAuthenticated, IsStaffOrReadOnly]

    def perform_create(self, serializer):
        request_user    = self.request.user
        kwarg_slug      = self.kwargs.get("slug")
        evento          = get_object_or_404(Evento, slug=kwarg_slug)
        serializer.save(author=request_user, evento=evento)

#"<slug:slug>/photos/<int:pk>/"
class EventoFotoPictureRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset                = EventoFoto.objects.all()
    serializer_class        = EventoFotoSerializer
    permission_classes      = [ IsStaffOrReadOnly ]


#/carica
class EventoFotoPictureUpdateView(generics.UpdateAPIView):
#class EventoFotoPictureUpdateView(APIView):
    serializer_class = EventoFotoSerializer
    permission_classes = [IsStaffOrReadOnly]
    parser_classes = (MultiPartParser, FormParser)


    def get_queryset(self, request,*args,**kwargs):
        print("evento foto picture update view")
        print("evento foto picture update view")

        kwarg_pk = self.kwargs.get("pk")
        return EventoFoto.objects.filter(pk=kwarg_pk)

    def get(self, request,*args,**kwargs):
        eventifoto= self.get_queryset(request)
        return Response(eventifoto)


    def post(self, request, *args, **kwargs):

        kwarg_pk = self.kwargs.get("pk")
#        kwarg_slug = self.kwargs.get("slug")

        print("pk: ", kwarg_pk)
#        print("slug:",kwarg_slug)

        file_serializer = EventoFotoSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#-------------------------------------------------------------------------------

class EventoYearArchiveView(YearArchiveView):
    queryset = Evento.objects.all()
    date_field = "created_at"
    make_object_list = True
    allow_future = True

#-------------------------------------------------------------------------------

class CrudLIST(APIView):
    def get(self, request, format=None):
        events = [event.title for event in Evento.objects.all()]
        return Response(events)

class CrudLIST1(APIView):
    def get(self, request, format=None):
#        events = Evento.objects.all().order_by('id')[:20].reverse()
        events = Evento.objects.all()
        posts_serialized = serializers.serialize('json', events)
        return JsonResponse(posts_serialized, safe=False)

#-------------------------------------------------------------------------------
def datetime_handler(x):
    if isinstance(x, datetime.datetime):
        return x.isoformat()
#    raise TypeError("Unknown type")
#-------------------------------------------------------------------------------

#   FROM
#   Events_evento
#   JOIN
#   Events_anno
#   ON
#   Events_evento.anno = Events_anno.anno


#S OUTER JOIN S’:
# FULL:  sia le tuple di S che S' che   non partecipano al join vengono completate
# LEFT:  le tuple di S che              non partecipano al join vengono completate
# RIGHT: le tuple di S’ che             non partecipano al join vengono completate


class RetrieveYears(generics.ListAPIView):
    q = """
            SELECT DISTINCT Events_anno.anno, Events_anno.id, Events_anno.slug
            FROM Events_anno JOIN Events_evento
            WHERE Events_anno.anno = Events_evento.anno
            ORDER BY Events_anno.anno
            DESC
        """
    queryset             = Anno.objects.raw(q)
#    queryset            = Evento.objects.all().order_by("-created_at")
    serializer_class    = AnnoSerializer
    permission_classes  = [IsAuthenticated]
#    lookup_field        = "slug"

class RetrieveCurrentYearSlug(generics.ListAPIView):
#current year
#datenow = datetime.datetime.now()
    year    = datetime.datetime.today().year
    q = "SELECT id,slug FROM Events_anno WHERE (anno = '%s')" % year
    queryset             = Anno.objects.raw(q)
#    queryset            = Evento.objects.all().order_by("-created_at")
    serializer_class    = AnnoSerializer
    permission_classes  = [IsAuthenticated]
    lookup_field        = "slug"

class RetrieveYearSlug(APIView):
    def get_object(self, anno):
        y         = get_object_or_404(Anno, anno=anno)
        return y
    def get(self, request, anno):
        yy          = self.get_object(anno)
        serializer      = AnnoSerializer(yy)
        return Response(serializer.data)
#    y = self.anno
#    q = "SELECT id,slug FROM Events_anno WHERE (anno = '%s')" % y
#    queryset             = Anno.objects.raw(q)
#    queryset            = Evento.objects.all().order_by("-created_at")
#    serializer_class    = AnnoSerializer
#    permission_classes  = [IsAuthenticated]
#    lookup_field        = "slug"

# **************************************************************************************************************
# NG    2019 11 03

#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class EventsYear(generics.ListAPIView):
    serializer_class = EventoSerializer
    model = serializer_class.Meta.model
    paginate_by = 100
    def get_queryset(self):
        anno = self.kwargs['anno']
        queryset = self.model.objects.filter(anno=anno)
#        q = "SELECT * FROM Events_evento WHERE ( anno_id= '%s') ORDER BY datainizio DESC" % anno
#        queryset             = Evento.objects.raw(q)
        return queryset.order_by('datainizio')
# **************************************************************************************************************
class EventsPast(generics.ListAPIView):
    datenow = datetime.datetime.now()
    q = "SELECT * FROM Events_evento WHERE ((datainizio < '%s') AND datafine) ORDER BY datainizio DESC" % datenow
    queryset             = Evento.objects.raw(q)
#    queryset            = Evento.objects.all().order_by("-created_at")
    serializer_class    = EventoSerializer
    permission_classes  = [IsAuthenticated]
    lookup_field        = "slug"
# **************************************************************************************************************
class EventsPastYears(generics.ListAPIView):
    q = """
        SELECT
                Events_evento.slug,
                Events_evento.id,
                COUNT(*) AS numEv
        FROM Events_evento,Events_anno
        GROUP BY Events_anno.anno
        ORDER BY Events_anno.anno DESC
        """
    queryset            = Evento.objects.raw(q)
    serializer_class    = EventoSerializer
    permission_classes  = [IsAuthenticated]
# **************************************************************************************************************
class EventsFuture(generics.ListAPIView):
    datenow = datetime.datetime.now()
    q                   = "SELECT * FROM Events_evento WHERE datainizio >= '%s' ORDER BY datainizio ASC" % datenow
    queryset             = Evento.objects.raw(q)
#    queryset            = Evento.objects.all().order_by("-created_at")
    serializer_class    = EventoSerializer
    permission_classes  = [IsAuthenticated]
    lookup_field        = "slug"
# **************************************************************************************************************
class EventsPast(generics.ListAPIView):
    datenow = datetime.datetime.now()
    q = "SELECT * FROM Events_evento WHERE ((datainizio < '%s') AND datafine) ORDER BY datainizio DESC" % datenow
    queryset             = Evento.objects.raw(q)
#    queryset            = Evento.objects.all().order_by("-created_at")

    serializer_class    = EventoSerializer
    permission_classes  = [IsAuthenticated]
    lookup_field        = "slug"
# **************************************************************************************************************
class EventsPastTEST(APIView):
    def get(self, request, format=None):
        datenow = datetime.datetime.now()
#        response[datenow] = response[datenow].strftime("%Y-%m-%d")
        print ("DEXO PAST Current date and time : ")
        print (datenow.strftime("%Y-%m-%d"))

        q = "SELECT * FROM Events_evento WHERE ((datainizio < '%s') AND datafine) " % datenow
        events              = Evento.objects.raw(q)

        elenco = []
        for event in events :
            ev =    {
                        "slug"                  : event.slug,
                        "title"                 : event.title,
                        "content"               : event.content,
                        "created_at"            : event.created_at,
                        "updated_at"            : event.updated_at,
                        "author"                : event.author,
                        "datainizio"            : event.datainizio,
                        "datafine"              : event.datafine,
                        "luogo"                 : event.luogo,
                        "partecipants"          : event.partecipants,
                        "fotografieconteggio"   : event.fotografieconteggio,
#                        "created_at": event.created_at,
                    }
#            print (ev)
#            print ("event slug: ",event.slug )
#            print ("event title: ",event.title )
#            print ("event content: ",event.content )
#            print ("created_at :", event.created_at)
#            print ("")
            elenco.append(ev)
        data =  json.dumps(elenco, default=datetime_handler)
        #my_list = [1,2,3,4,’a’,5,6]
        #json_str = json.dumps(my_list)
        print ("DEXO PAST dati da spedire... elenco" , elenco)
        print ("DEXO PAST dati da spedire... data" , data)

        response = JsonResponse(data, safe=False)

#        response[datenow] = response[datenow].strftime("%Y-%m-%d")
        return response

class EventsFutureTEST(APIView):

    def get(self, request, format=None):
        datenow = datetime.datetime.now()
        print ("DEXO FUTURE Current date and time : ")
        print (datenow.strftime("%Y-%m-%d"))

        q                   = "SELECT * FROM Events_evento WHERE datainizio > '%s' " % datenow
        events              = Evento.objects.raw(q)
        elenco = []

        for event in events :
            ev =    {
                        "slug"                  : event.slug,
                        "title"                 : event.title,
                        "content"               : event.content,
#                        "created_at": event.created_at,
                        "created_at"            : event.created_at,
                        "updated_at"            : event.updated_at,
                        "author"                : event.author,
                        "datainizio"            : event.datainizio,
                        "datafine"              : event.datafine,
                        "luogo"                 : event.luogo,
                        "partecipants"          : event.partecipants,
                        "fotografieconteggio"   : event.fotografieconteggio,
                    }
#            print (ev)
#            print ("event slug: ",event.slug )
#            print ("event title: ",event.title )
#            print ("event content: ",event.content )
#            print ("created_at :", event.created_at)
#            print ("")

            elenco.append(ev)
        data =  json.dumps(elenco, default=datetime_handler)

        #my_list = [1,2,3,4,’a’,5,6]
        #json_str = json.dumps(my_list)
        print ("DEXO FUTURE dati da spedire... elenco" , elenco)
        print ("DEXO FUTURE dati da spedire... data" , data)

        response = JsonResponse(data, safe=False)
#        response[datenow] = response[datenow].strftime("%Y-%m-%d")
        return response

#-----------------------------------------------------------------------------------------------------------------------
class CrudLIST2(APIView):
    def get(self, request, format=None):

        elenco = []
        for event in Evento.objects.all():
            ev =    {
                        "slug"      : event.slug,
                        "title"     : event.title,
                        "content"   : event.content,
#                        "created_at": event.created_at,
                    }
#            print (ev)
#            print ("event slug: ",event.slug )
#            print ("event title: ",event.title )
#            print ("event content: ",event.content )
#            print ("created_at :", event.created_at)
#            print ("")

            elenco.append(ev)
        data = json.dumps(elenco)

        #my_list = [1,2,3,4,’a’,5,6]
        #json_str = json.dumps(my_list)
        print (elenco)

        response = JsonResponse(data, safe=False)
        return response

#-----------------------------------------------------------------------------------------------------------------------
class crudYearCreate(viewsets.ModelViewSet):
        queryset = Anno.objects.all()
        serializer_class = AnnoSerializer
#-----------------------------------------------------------------------------------------------------------------------
class crudYearCreateOLD(APIView):
    def POST(self, request,  format=None):
        # author = request.user
        print("crud Year Create TEST post")

        serializer = AnnoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#-----------------------------------------------------------------------------------------------------------------------
class crudEventsCreate(viewsets.ModelViewSet):
        queryset = Evento.objects.all()
        serializer_class = EventoSerializer
#-----------------------------------------------------------------------------------------------------------------------
class crudEventsCreateOLD(APIView):
    def GET(self, request,  format=None):
        print("crud Events Create TEST get")
        events = Evento.objects.all()
        serializer = EventoSerializer(events, many=True)
        return Response(serializer.events)

    def POST(self, request,  format=None):
        # author = request.user
        print("crud Events Create TEST post")

        serializer = EventoSerializer(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#-----------------------------------------------------------------------------------------------------------------------
class crudEventsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer
#-----------------------------------------------------------------------------------------------------------------------
class EventsCRUDlist(APIView):
    def get(self, request, format=None):
        slugs = [ev.slug for ev in Evento.objects.all()]
        return Response(slugs)
#-----------------------------------------------------------------------------------------------------------------------
# events basic crud functions
class EventsCRUD(APIView):
    """
    retrieve,
    update,
    delete
    per un'istanza di Events
    """
    def get_object(self, pk):
        evento         = get_object_or_404(Evento, pk=pk)
        return evento
    def get(self, request, pk):
        evento          = self.get_object(pk)
        serializer      = EventoSerializer(evento)
        return Response(serializer.data)
    def put(self, request, pk):
        evento          = self.get_object(pk)
        serializer      = EventoSerializer(evento,
                                            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk):
        evento         = self.get_object(pk)
        evento.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
#-----------------------------------------------------------------------------------------------------------------------
class EventsCRUDslug(APIView):
    def get_object(self, slug):
        evento         = get_object_or_404(Evento, slug=slug)
        return evento
    def get(self, request, slug):
        evento          = self.get_object(slug)
        serializer      = EventoSerializer(evento)
        return Response(serializer.data)
    def delete(self, request, slug):
        evento         = self.get_object(slug)
        evento.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
#-----------------------------------------------------------------------------------------------------------------------
class FileUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser, FileUploadParser)
    def post(self, request, *args, **kwargs):
      print("file upload test...")
      print(request)
      print(request.data)
      ps = PhotoPlusSerializer(data=request.data)
      if ps.is_valid():
          ps.save()
          return Response(ps.data, status=status.HTTP_201_CREATED)
      else:
          return Response(ps.errors, status=status.HTTP_400_BAD_REQUEST)
#-----------------------------------------------------------------------------------------------------------------------
