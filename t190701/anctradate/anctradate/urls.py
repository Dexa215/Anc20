"""userprofilesapi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import include, path, re_path
from django_registration.backends.one_step.views import RegistrationView
# test media folder...
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static

from core.views import IndexTemplateView, IndexTemplateViewTEST
from core.views import dexo_current_datetime

#from users.forms                import CustomUserForm
from profiles.forms import CustomFormUser

from rest_auth import urls


urlpatterns = [

    #    url(r'^oauth/', include('social_django.urls', namespace='social')),

    path('admin/', admin.site.urls),

    path("accounts/register/",
         RegistrationView.as_view(
             #           form_class=CustomUserForm,
             form_class=CustomFormUser,
             success_url="/",
         ), name="django_registration_register"),

    path("accounts/",
         include("django_registration.backends.one_step.urls")),

    path("accounts/",
         include("django.contrib.auth.urls")),

    #   apps:
    path("api/events/",             include("events.api.urls")),
    path("api/evidenza/",           include("evidenza.api.urls")),
    path("api/profiles/",           include("profiles.api.urls")),
    path("api/soci/",               include("soci.api.urls")),

    # Browsable API
    # Login:
    path("api-auth/",               include("rest_framework.urls")),

    # REST:
    # Login
    path("api/rest-auth/",
         include("rest_auth.urls")),
    # registration
    path("api/rest-auth/registration/",
         include("rest_auth.registration.urls")),


    #    re_path(r'^.+jpg/$',
    #            IndexTemplateView.as_view(),
    #            name="entry-point-jpg"),

    path("dexotime/",
         dexo_current_datetime,
         name="dexotime"),


    path("test/",
         IndexTemplateViewTEST.as_view(),
         name="entry-point-start"),


    re_path(r"^event/.*$",
            IndexTemplateView.as_view(),
            name="entry-point"),

    path("",
         IndexTemplateView.as_view(),
         name="entry-point-start"),

    # vue routes: -->
    re_path(r"^$",
            IndexTemplateView.as_view(),
            name="entry-point"),
    path("sede",
         IndexTemplateView.as_view(),
         name="homepageSede"),
    path("sedeOrari",
         IndexTemplateView.as_view(),
         name="homepageOrari"),
    path("links",
         IndexTemplateView.as_view(),
         name="homepagelinks"),
    path("contatti",
         IndexTemplateView.as_view(),
         name="homepagecontatti"),
    path("chisiamo",
         IndexTemplateView.as_view(),
         name="homepagechisiamo"),
    path("chisiamosoci",
         IndexTemplateView.as_view(),
         name="homepagechisiamosoci"),
    path("chisiamobenemerite",
         IndexTemplateView.as_view(),
         name="homepagechisiamobenemerite"),
    path("chisiamosimpatizzanti",
         IndexTemplateView.as_view(),
         name="homepagechisiamosimpatizzanti"),
    path("chisiamodirettivo",
         IndexTemplateView.as_view(),
         name="homepagechisiamodirettivo"),
    path("bacheca",
         IndexTemplateView.as_view(),
         name="homepagebacheca"),
    path("eventi",
         IndexTemplateView.as_view(),
         name="homepageeventi"),
    path("agenda",
         IndexTemplateView.as_view(),
         name="homepageagenda"),
    path("archivio",
         IndexTemplateView.as_view(),
         name="homepagearchivio"),
    path("tesseramento",
         IndexTemplateView.as_view(),
         name="homepagetesseramento"),
    path("tesseramentoprassi",
         IndexTemplateView.as_view(),
         name="homepagetesseramentoprassi"),

    path("login",
         IndexTemplateView.as_view(),
         name="homepagelogin")

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
