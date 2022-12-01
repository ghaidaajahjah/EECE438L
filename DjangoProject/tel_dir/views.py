from django.shortcuts import HttpResponseRedirect, HttpResponse, redirect,render
from django.urls import reverse
from .urls import *
from .forms import ContactForm
from .models import Contact

# Create your views here.
def homepage(request):
  if request.method == "POST":
    form = ContactForm(request.POST)
    if form.is_valid():
      form.save()
  contacts = Contact.objects.all()
  form = ContactForm()
  return render(request, "home.html", {"form": form, "contacts":contacts})


def deleteContact(request, tel1):

    contact = Contact.objects.get(tel1=tel1)
    contact.delete()
    
    return HttpResponseRedirect(reverse('tel_dir:homepage'))


def updateContact(request,tel1):

    contact = Contact.objects.get(tel1=tel1)

    if request.method == "POST":
        form = ContactForm(request.POST, instance=contact)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('tel_dir:homepage'))


    form = ContactForm(instance=contact)
    return render(request, "update.html", {"form": form})


def searchByName(request):

    if request.method == "POST":
        name= request.POST['searchByName']
        contacts = Contact.objects.filter(name=name)

        return render(request, "searchContact.html",{"contacts":contacts})
   

    contacts = Contact.objects.all()
    return render(request, "searchContact.html",{"contacts":contacts})
   

def searchByTel(request):

    if request.method == "POST":
        tel1= request.POST['searchByTel']
        contacts = Contact.objects.filter(tel1=tel1)

        return render(request, "searchTel.html",{"contacts":contacts})
   

    contacts = Contact.objects.all()
    return render(request, "searchTel.html",{"contacts":contacts})

def searchByProfession(request):

    if request.method == "POST":
        profession= request.POST['searchByProfession']
        contacts = Contact.objects.filter(profession=profession)

        return render(request, "searchProfession.html",{"contacts":contacts})
   

    contacts = Contact.objects.all()
    return render(request, "searchProfession.html",{"contacts":contacts})

def compare(request):

     if request.method == "POST":
        name1= request.POST['contact1']
        name2= request.POST['contact2']
        contact1 = Contact.objects.filter(name=name1).first()
        contact2 = Contact.objects.filter(name=name2).first()

        result= (contact1==contact2)
        if (result == True):
            result= 'Result is: '+ str(result)
        else:
            result= 'Result is: '+str(result)

        return render(request, "compare.html",{"result":result})

     return render(request, "compare.html")

def sortByName(request):
    contacts = Contact.objects.all().order_by('name')
    return render(request, "sortByName.html",{"contacts":contacts})

def sortByProfession(request):
    contacts = Contact.objects.all().order_by('profession')
    return render(request, "sortByProfession.html",{"contacts":contacts})
