from django.urls                import include, path
from rest_framework.routers     import DefaultRouter

#from events.api                 import views as eV
import events.api.views as eV

from .views                     import (CrudLIST,
                                        CrudLIST1,
                                        CrudLIST2,

                                        #EventsNext,
                                        EventsPast,
                                        EventsPastYears,
                                        EventsFuture,

                                        EventsCRUD,
                                        EventsCRUDlist,
                                        EventsCRUDslug,
                                        EventoListAPIView,

                                        EventsYear,

                                        RetrieveYearSlug,
                                        RetrieveCurrentYearSlug,
                                        RetrieveYears,

                                        EventoListYearAPIView,

                                        crudEventsCreate,
                                        crudEventsCreateOLD,
                                        crudEventsDetail,

                                        crudYearCreate,

                                        EventoFotoPlusListAPIView

                                )

                                        #EventoModelViewSet,
                                        #EventoFotoPictureWiewSet,




from ..models              import (    Evento,
                                       EventoFoto,
                                       PhotoPlus,
                                       Anno               )




from django.views.generic.dates import ArchiveIndexView


#binding esplicito... sostituito dal lavoro del router
#profile_list    = ProfileViewSet.as_view({"get": "list"})
#profile_detail  = ProfileViewSet.as_view({"get": "retrieve"})

#/api/events/ -->

router  =   DefaultRouter()
router.register(r"",                eV.EventoModelViewSet)
#-----------------------------------------------------------------
#router.register(r"photos",         eV.EventoFotoPictureWiewSet)


urlpatterns     =   [
#- events - gestito dal router -------------------------------------------------
    path("", include(router.urls)),

#- events - crud - list         ------------------------------------------------
    path("crud/list/",
        CrudLIST.as_view(),
        name="eventi-CRUD-list"),
    path("crud/list1/",
        CrudLIST1.as_view(),
        name="eventi-CRUD-list1"),
    path("crud/list2/",
        CrudLIST2.as_view(),
        name="eventi-CRUD-list2"),

    path("cyc/",
         crudYearCreate,
         name="crud_years_CREATE"),

    path("crudCreate/",
         crudEventsCreate,
         name="crud_events_CREATE"),


# TEST ---------------------------------------------------------------------------
    path("crudCreateOLD/",
         crudEventsCreateOLD,
         name="crud_events_CREATE_OLD"),



    path("crudDetail/",
         crudEventsDetail.as_view(),
         name="crud_events_detail"),

    #-------------------------------------------------------------------------------

    path("crud/YearSlug/<int:anno>/",
        RetrieveYearSlug.as_view(),
        name="year"),

    path("crud/YearSlug/",
        RetrieveCurrentYearSlug.as_view(),
        name="yearcurrent"),

    path("crud/Years/",
        RetrieveYears.as_view(),
        name="years"),

    path("crud/listPast/",
        EventsPast.as_view(),
        name="eventi-past"),

    path("crud/listPastYears/",
        EventsPastYears.as_view(),
        name="eventi-past-years"),

    path("crud/listFuture/",
        EventsFuture.as_view(),
        name="eventi-future"),


#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    path("crud/listEventsYear/<int:anno>/",
        EventsYear.as_view(),
        name="eventi-anno"),
#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


#- events - crud - list         ------------------------------------------------

#- events - crud - get          ------------------------------------------------
    #test ok
    path('crud/<int:pk>/',
         EventsCRUD.as_view(),
         name="eventi-CRUD-functions"),

    path('crud/s/<slug:slug>/',
         EventsCRUDslug.as_view(),
         name="eventi-CRUD-functions-slug"),


#- events - crud - get          ------------------------------------------------

    path("archive/list/",
         ArchiveIndexView.as_view(model=Evento, date_field="created_at"),
         name="event_archive"),

    path("archive/count/",
         eV.EventoListCountYearsAPIView,
         name="event_archive_count"),

#        test ok
#    path('archive/<int:year>/',
#         eV.EventoYearArchiveView.as_view(),
#         name="evento_year_archive"),

    path("archive/<int:year>/",
         eV.EventoListYearAPIView.as_view(),
         name="evento_year_archive"),

# photos...

#List
    path("<slug:slug>/photos/",
        eV.EventoFotoListAPIView.as_view(),
        name="event-photos-list"),

    path("<int:pk>/photosPlus/",
         eV.EventoFotoPlusListAPIView.as_view(),
         name="event-photosplus-list"),

#Create [EventoFoto]
    path("<slug:slug>/photos/new/",
        eV.EventoFotoPictureCreateAPIView.as_view(),
        name="create-photo"),

#Read Update Delete
    path("<slug:slug>/photos/<int:pk>/",
        eV.EventoFotoPictureRUDAPIView.as_view(),
        name="photo-detail"),

#Update [EventoFotoPicture] -- CARICA FOTO
    path("<slug:slug>/photos/carica/",
        eV.EventoFotoPictureUpdateView.as_view(),
        name="photo-upload"),

#Update [EventoFotoPicture] -- CARICA FOTO
    path("<slug:slug>/caricafile/",
        eV.FileUploadView.as_view(),
        name="file-upload"),

]
