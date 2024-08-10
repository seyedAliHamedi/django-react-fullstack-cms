from django.urls import path, include
from .views import BlogView, BlogDetailView, CommentView, CommentDetailView, CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
    path('register/', CreateUserView.as_view()),
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh', TokenRefreshView.as_view()),
    path('auth/', include('rest_framework.urls')),

    path('blogs/', BlogView.as_view()),
    path('blogs/<int:pk>', BlogDetailView.as_view()),
    path('comments/', CommentView .as_view()),
    path('comments/<int:pk>', CommentDetailView .as_view()),
]
