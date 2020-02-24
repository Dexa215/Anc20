from django.urls                import include, path
from rest_framework.routers     import DefaultRouter
from profiles.api.views         import (ProfileViewSet,
                                        AvatarUpdateView,
                                        ProfileStatusViewSet,
                                        ProfileList,
                                        get_current,

                                        )#old

#binding esplicito...
profile_list    = ProfileViewSet.as_view({"get": "list"})
profile_detail  = ProfileViewSet.as_view({"get": "retrieve"})

router          = DefaultRouter()
router.register(r"profiles",    ProfileViewSet)
router.register(r"status",      ProfileStatusViewSet,       basename="status")

urlpatterns     = [
    #old
    path("profiles/",           ProfileList.as_view(),      name="profile_list"),

    #binding esplicito
    path("profiles/",           profile_list,               name="profile_list"),
    path("profiles/<int:pk>",   profile_detail,             name="profile_detail"),

    #gestito dal router
    path("", include(router.urls)),
    path("avatar/", AvatarUpdateView.as_view(), name="avatar-update"),

    #chiamate custom
    path("getcurrentuser/",     get_current,                name="get_user")

]
