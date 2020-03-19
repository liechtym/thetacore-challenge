from django.urls import path
from .views import ExpertsView

urlpatterns = [
    path('experts', ExpertsView.as_view(), name='experts'),
]