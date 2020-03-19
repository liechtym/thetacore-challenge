from django.contrib import admin

# Register your models here.

from django.contrib import admin

from .models import Expert, Friendship, Heading

admin.site.register(Expert)
admin.site.register(Friendship)
admin.site.register(Heading)