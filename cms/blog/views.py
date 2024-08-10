from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializer import BlogSerializer, CommentSerializer, UserSerializer
from .models import Blog, Comment
from rest_framework import generics
from django.contrib.auth.models import User


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]


class BlogView(generics.ListCreateAPIView):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()


class BlogDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()


class CommentView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class CommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
