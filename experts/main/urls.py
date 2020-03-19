from django.urls import path
from .views import ExpertView

urlpatterns = [
    path('experts', ExpertView.as_view(), name='experts'),
]