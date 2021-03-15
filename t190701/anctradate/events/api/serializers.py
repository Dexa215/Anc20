from rest_framework     import serializers
from ..models      import Evento, EventoFoto, Anno, Scatti, Photo, PhotoPlus
import locale

#locale.setlocale(locale.LC_ALL, 'it_IT.utf8')
#locale.setlocale(locale.LC_ALL, 'it_IT.UTF-8')
#locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')
#-------------------------------------------------------------------------------
class EventoFotoSerializer(serializers.ModelSerializer):

    author          = serializers.StringRelatedField(read_only=True)
    created_at      = serializers.SerializerMethodField(read_only=True)
    evento_slug     = serializers.SerializerMethodField(read_only=True)
#    evento          = serializers.StringRelatedField(read_only=True)
    picture         = serializers.ImageField(read_only=True)

    class Meta:
        model       = EventoFoto
        fields = "__all__"

        #exclude     = ["evento", "updated_at"]

    def get_created_at(self, instance):
        return instance.created_at.strftime('%d %B %Y')

    def get_evento_slug(self, instance):
        return instance.evento.slug

    def get_evento_pk(self, instance):
        return instance.evento.pk

#-------------------------------------------------------------------------------
class EventoFotoPictureSerializer(serializers.ModelSerializer):
    class Meta:
        model   = EventoFoto
#        fields = ["picture"]
        fields = "__all__"



#-------------------------------------------------------------------------------
class EventoSerializer(serializers.ModelSerializer):
    slug                = serializers.SlugField(read_only=True)
    author              = serializers.StringRelatedField(read_only=True)
    created_at          = serializers.SerializerMethodField(read_only=True)
    foto_count          = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model   = Evento
        exclude = ["updated_at"]

    def get_foto_count(self, instance):
        return instance.fotografieevento.count()

    def get_created_at(self, instance):
        return instance.created_at.strftime('%d %B %Y')


class AnnoSerializer(serializers.ModelSerializer):
    id                  = serializers.IntegerField(read_only=True)
    slug                = serializers.SlugField(read_only=True)
    anno                = serializers.IntegerField(read_only=True)
    title               = serializers.CharField(read_only=True)
    color               = serializers.CharField(read_only=True)
    content             = serializers.CharField(read_only=True)

    class Meta:
        model   = Anno
#        fields = '__all__'
        fields =["slug","anno","title","color","content","preview","id"]


#-----------------------------------------------------------------------------------------------------------------------
class ScattiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scatti
        fields = "__all__"

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = "__all__"

class PhotoPlusSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoPlus
        fields = "__all__"