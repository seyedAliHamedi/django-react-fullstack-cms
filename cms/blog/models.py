from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField


class CategoryChoices(models.TextChoices):
    TECHNOLOGY = 'TECH', 'Technology'
    LIFESTYLE = 'LIFE', 'Lifestyle'
    FOOD = 'FOOD', 'Food'
    TRAVEL = 'TRVL', 'Travel'
    EDUCATION = 'EDU', 'Education'


class Blog(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=500)
    tags = ArrayField(models.CharField(max_length=100),
                      blank=True, default=list)
    category = models.CharField(
        max_length=4,
        choices=CategoryChoices.choices,
        default=CategoryChoices.TECHNOLOGY
    )
    author = models.ForeignKey(
        User, related_name='blogs', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class Comment(models.Model):
    blog = models.ForeignKey(
        Blog, related_name='comments', on_delete=models.CASCADE)
    author = models.ForeignKey(
        User, related_name='comments', on_delete=models.CASCADE)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.body} was Comment by {self.author} on {self.blog}'
