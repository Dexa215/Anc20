from rest_framework     import serializers
from ..models        import Socio, Carica, CaricaStorico, Grado


class SocioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model   = Socio
        fields  = "__all__"
