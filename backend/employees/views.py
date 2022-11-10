from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
<<<<<<< HEAD
def employee_list(request):


    return Response('ok')
=======
def get_all_employees(request):
    return Response("ok")
>>>>>>> 1b938f84b0f4b6e2b6fd16958dcae49c8aafc930
