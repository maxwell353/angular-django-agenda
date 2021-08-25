from django.contrib.auth.models import User, Group
from agenda.models import Contato
from rest_framework import viewsets, authentication
from agenda.serializers import UserSerializer, GroupSerializer, ContatoSerializer

from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
import json

@csrf_exempt
def login(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    if body['username']:
        user = authenticate(username=body['username'], password=body['password'])
        if user:
            token = Token.objects.get_or_create(user=user)
            return JsonResponse( {'token': token[0].key, 'id': user.id, 'usuario': user.username, 'email': user.email, 'nome': user.first_name} )
        else:
            return JsonResponse( {'error': "Error"} )

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