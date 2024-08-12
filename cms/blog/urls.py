from django.urls import path, include
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
    path('register/', CreateUserView.as_view()),
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('auth/', include('rest_framework.urls')),

    path('blogs/', BlogView.as_view()),
    path('blogs/create/', BlogCreate.as_view()),
    # path('blogs/<int:pk>', BlogDetailView.as_view()),
    path('blogs/delete/<int:pk>', BlogDelete.as_view()),
    path('blogs/update/<int:pk>', BlogUpdate.as_view()),
    path('comments/', CommentView .as_view()),
    path('comments/create', CommentCreate.as_view()),
    path('comments/delete/<int:pk>', CommentDelete.as_view()),
]
