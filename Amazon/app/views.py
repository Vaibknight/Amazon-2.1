from django.shortcuts import render
from.models import Orders

# Create your views here.
def index(request):
    return render(request,'index.html')


def cart(request):
    if request.method == "POST":
        items_json = request.POST.get('itemsJson','')
        total = request.POST.get('total','')
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        address = request.POST.get('address1', '')+" "+ request.POST.get('address2', '')
        city = request.POST.get('city', '')
        state = request.POST.get('state', '')
        zip_code = request.POST.get('zip_code', '')
        phone = request.POST.get('phone', '')


        order = Orders(items_json=items_json, name=name,email=email,phone=phone,address=address,city=city,state=state,zip_code=zip_code,total=total)
        order.save()
        thank = True
        id = order.order_id
        return render(request,'cart.html',{'thank': thank , 'id': id})
    return render(request,'cart.html')