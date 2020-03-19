from django.db import models

# Create your models here.

class Expert(models.Model):
    name = models.CharField('name', max_length=50)
    website = models.URLField('website', max_length=100)

class Friendship(models.Model):
    # First and second experts in the friendships
    expert1 = models.ForeignKey(Expert, related_name='expert1', on_delete=models.CASCADE)
    expert2 = models.ForeignKey(Expert, related_name='expert2', on_delete=models.CASCADE)

class Heading(models.Model):
    # Expert header is attached to
    expert = models.ForeignKey(Expert, on_delete=models.CASCADE)
    # Header type for h1 and h2
    headertype = models.IntegerField()
    # The text content inside of the header gathered
    headercontent = models.CharField(max_length=200)