from django.urls import path
from .views import BlogView, BlogDetailView, CommentView, CommentDetailView

urlpatterns = [
    path('blogs', BlogView.as_view()),
    path('blogs/<int:pk>', BlogDetailView.as_view()),
    path('comments/', CommentView .as_view()),
    path('comments/<int:pk>', CommentDetailView .as_view()),
]
