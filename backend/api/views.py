from django.http import JsonResponse

def home_data(request):
    data = {
        'message': 'Hello from Django Backend!',
        'items': [
            {'id': 1, 'name': 'Item 1'},
            {'id': 2, 'name': 'Item 2'},
            {'id': 3, 'name': 'Item 3'},
        ]
    }
    return JsonResponse(data)