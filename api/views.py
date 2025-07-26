from django.http import JsonResponse

def home_data(request):
    data = {
        'message': 'Hello from Django API!',
        'items': ['item1', 'item2', 'item3']
    }
    return JsonResponse(data)