from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from django.http import HttpResponse as Response
from django.template import loader
from .models import Expert
from .serializers import ExpertSerializer
import json


class ExpertView(generics.ListCreateAPIView):
    
    def post(self, request):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        if (not body['name'] or not body['website']):
            return Response('The correct fields were not available', status=400)

        # Save to Django database
        expert = Expert(name=body['name'], website=body['website'])
        expert.save()
        # Get updated data to return
        experts = Expert.objects.all()
        serializer = ExpertSerializer(experts, many=True)
        return Response(json.dumps(serializer.data))

    def get(self, request):
        experts = Expert.objects.all()
        serializer = ExpertSerializer(experts, many=True)
        return Response(json.dumps(serializer.data))