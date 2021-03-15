from django.urls                import include, path
from rest_framework.routers     import DefaultRouter
from .views                     import SocioModelViewSet


router          = DefaultRouter()
router.register(r"soci",        SocioModelViewSet)

#gestito dal router
urlpatterns     = [ path("", include(router.urls)),]
