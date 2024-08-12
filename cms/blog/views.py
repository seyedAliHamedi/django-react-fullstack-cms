from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializer import BlogSerializer, CommentSerializer, UserSerializer
from .models import Blog, Comment
from rest_framework import generics
from django.contrib.auth.models import User


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]


class AllBlogView(generics.ListAPIView):
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]
    queryset = Blog.objects.all()


class BlogView(generics.ListAPIView):
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Blog.objects.filter(author=user)


class BlogDelete(generics.DestroyAPIView):
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Blog.objects.filter(author=user)


class BlogUpdate(generics.UpdateAPIView):
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Blog.objects.filter(author=user)


class BlogCreate(generics.CreateAPIView):
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class CommentView(generics.ListAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class CommentDelete(generics.DestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class CommentCreate(generics.CreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)
