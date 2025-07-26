from django.http import JsonResponse

def home_data(request):
    data = {
        'message': 'Hello from Django API!',
        'items': [
            {'id': 1, 'name': 'Strategic Planning'},
            {'id': 2, 'name': 'Financial Advisory'},
            {'id': 3, 'name': 'Operations Improvement'}
        ]
    }
    return JsonResponse(data)