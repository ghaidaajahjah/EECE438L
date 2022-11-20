from django.urls import path
from . import views

app_name = "tel_dir"   

urlpatterns = [
    path("", views.homepage, name="homepage"),
    path('delete/<str:tel1>', views.deleteContact, name='deleteContact'),
    path('update/<str:tel1>',views.updateContact,name='updateContact'),
    path('searchName',views.searchByName,name='searchByName'),
    path('searchTel',views.searchByTel,name='searchByTel'),
    path('searchProfession',views.searchByProfession,name='searchByProfession'),
    path('compare',views.compare,name='compare'),
    path('sortByName',views.sortByName,name='sortByName'),
    path('sortByProfession',views.sortByProfession,name='sortByProfession'),
    
  
]