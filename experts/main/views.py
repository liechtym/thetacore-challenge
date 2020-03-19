from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from django.http import HttpResponse
from django.template import loader
from .models import Expert
from .serializers import ExpertSerializer


class ExpertsView(generics.ListAPIView):
    queryset = Expert.objects.all()
    serializer_class = ExpertSerializer