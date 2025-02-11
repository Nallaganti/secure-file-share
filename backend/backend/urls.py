from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from rest_framework.schemas import get_schema_view
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# API Documentation
schema_view = get_schema_view(
    openapi.Info(
        title="Secure File Share API",
        default_version="v1",
        description="API documentation for Secure File Share",
    ),
    public=True,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("authentication.urls")),
    path("", lambda request: JsonResponse({"message": "Welcome to Secure File Share Backend!"})),  # Home
    path("docs/", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui")
]
