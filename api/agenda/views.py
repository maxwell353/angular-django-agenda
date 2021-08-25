from django.contrib.auth.models import User, Group
from agenda.models import Contato
from rest_framework import viewsets, authentication
from agenda.serializers import UserSerializer, GroupSerializer, ContatoSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    authentication_classes = (authentication.TokenAuthentication,)

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    authentication_classes = (authentication.TokenAuthentication,)

class ContatoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Contato.objects.all()
    serializer_class = ContatoSerializer
    authentication_classes = (authentication.TokenAuthentication,)