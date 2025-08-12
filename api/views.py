from django.http import JsonResponse
from .models import Item

def home_data(request):
    items = list(Item.objects.values('id', 'name'))
    data = {
        'message': 'Hello from Django API!',
        'items': items
    }
    return JsonResponse(data)