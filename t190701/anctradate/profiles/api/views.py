from profiles.models            import (    Profile,
                                            ProfileStatus               )
from profiles.api.permissions   import (    IsOwnProfileOrReadOnly,
                                            IsOwnerOrReadOnly           )
from profiles.api.serializers   import (    ProfileAvatarSerializer,
                                            ProfileSerializer,
                                            ProfileStatusSerializer     )
from rest_framework             import      generics
from rest_framework             import      mixins
from rest_framework             import      viewsets
from rest_framework.filters     import      SearchFilter
from rest_framework.permissions import      IsAuthenticated

from rest_framework.viewsets    import (    ModelViewSet,
                                            ReadOnlyModelViewSet
                                                                        )

from django.contrib.auth.models import User
import requests

from django.http        import JsonResponse

def get_current(request):
    print("richiesta user corrente...")
    user        = User.objects.get(username=request.user.username)
    prof        = Profile.objects.get(user_id=user.id)
    print("richiesta user corrente...", user)
    data = {"us": {
        "name": user.username,
        "staff": user.is_staff,
        "superuser": user.is_superuser,
        "bio": prof.bio,
        "city": prof.city,
    }}
    response = JsonResponse(data)
    return response

#generics-----------------------------------------------------------------------

class AvatarUpdateView(generics.UpdateAPIView):
    serializer_class    = ProfileAvatarSerializer
    permission_classes  = [IsAuthenticated]

    def get_object(self):
        profile_object  = self.request.user.profile
        return profile_object


class ProfileList(generics.ListAPIView):
    queryset            = Profile.objects.all()
    serializer_class    = ProfileSerializer
    permission_classes  = [IsAuthenticated]

#viewsets-----------------------------------------------------------------------

class ProfileListViewSet(ReadOnlyModelViewSet):
    queryset            = Profile.objects.all()
    serializer_class    = ProfileSerializer
    permission_classes  = [IsAuthenticated]


class ProfileViewSet(       mixins.UpdateModelMixin,
                            mixins.ListModelMixin,
                            mixins.RetrieveModelMixin,
                            viewsets.GenericViewSet):

    queryset            = Profile.objects.all()
    serializer_class    = ProfileSerializer
    permission_classes  = [IsAuthenticated, IsOwnProfileOrReadOnly]
    filter_backends     = [SearchFilter]
    search_fields       = ["city"]


class ProfileStatusViewSet( ModelViewSet):
    serializer_class    = ProfileStatusSerializer
    permission_classes  = [IsAuthenticated, IsOwnerOrReadOnly]

    def get_queryset(self):
        queryset        = ProfileStatus.objects.all()
        username        = self.request.query_params.get("username", None)
        if username is not None:
            queryset    = queryset.filter(user_profile__user__username=username)
        return queryset

    def perform_create(self, serializer):
        user_profile    = self.request.user.profile
        serializer.save(user_profile=user_profile)
