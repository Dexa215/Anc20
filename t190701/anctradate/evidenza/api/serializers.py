from rest_framework     import serializers
from ..models           import Evidenza
import locale

#locale.setlocale(locale.LC_ALL, 'it_IT.utf8')
#locale.setlocale(locale.LC_ALL, 'it_IT.UTF-8')
#locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')
#-------------------------------------------------------------------------------

class EvidenzaSerializer(serializers.ModelSerializer):
    slug                = serializers.SlugField(read_only=True)
    created_at          = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model   = Evidenza
        fields = "__all__"

    def get_created_at(self, instance):
        return instance.created_at.strftime('%d %B %Y')

