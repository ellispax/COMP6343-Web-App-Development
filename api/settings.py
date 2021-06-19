"""
Django settings for api project.

Generated by 'django-admin startproject' using Django 3.0.6.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os
from datetime import timedelta
from django.conf import settings
import django_heroku

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!


# SECURITY WARNING: don't run with debug turned on in production!




EMAIL_HOST='smtp.gmail.com'
EMAIL_HOST_USER='layacheadeth@gmail.com'
EMAIL_HOST_PASSWORD='Attackonline@1234'
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_USE_SSL=False
EMAIL_BACKEND='django.core.mail.backends.smtp.EmailBackend'


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'contact_us',
    'listing',
    'realtor',
    'rest_framework',
    'corsheaders',
    'user',
    'django_filters',
]

CORS_ORIGIN_ALLOW_ALL=True
# allow credential so we can consume cookie access
# if false, our frontend won't be able to get the cookie.
# if true, frontend can get this cookie after login.
CORS_ALLOW_CREDENTIALS=True



# CORS_ALLOWED_WHITELIST={
# 'http://localhost:4200/'
# }

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'api.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


WSGI_APPLICATION = 'api.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

# import pymysql
# pymysql.version_info=(1,4,6,'final',0)
# pymysql.install_as_MySQLdb()
#
# if os.getenv('GAE_APPLICATION', None):
#     DATABASES = {
#         'default': {
#             'ENGINE': 'django.db.backends.mysql',
#             'HOST': '/cloudsql/realestate-project-316907:us-central1:realestate-instances',
#             'USER': 'deth-lay',
#             'PASSWORD': '290619',
#             'NAME': 'main',
#             # 'HOST': 'localhost',
#             # 'PORT': '3306',
#         }
#     }
#
#
# else:
#     DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'NAME': 'web_app_sec_project',
#         'USER': 'root',
#         'PASSWORD': 'Attack@123',
#         'HOST': 'localhost',
#         'PORT': '3306',
#         }
#         }
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'NAME': 'sql6416315',
#         'USER': 'sql6416315',
#         'PASSWORD': '7TRibcp7GR',
#         'HOST': 'sql6.freemysqlhosting.net',
#         'PORT': '3306',
#     }
# }





REST_FRAMEWORK = {
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.FormParser',
        'rest_framework.parsers.MultiPartParser'
     )
 }

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    # 'DEFAULT_AUTHENTICATION_CLASSES': (
    #     'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
    #     'rest_framework.authentication.SessionAuthentication',
    #     'rest_framework.authentication.BasicAuthentication',
    # ),
    'DEFAULT_PAGINATION_CLASS':'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE':2,


}


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)

MEDIA_ROOT = os.path.join(BASE_DIR,'media')
MEDIA_URL='/media/'

REST_FRAMEWORK={
    'DEFAULT_AUTHENTICATION_CLASSES':(
        'rest_framework_simplejwt.authentication.JWTAuthentication',
)
}

# REST_FRAMEWORK = {
#     'DEFAULT_PERMISSION_CLASSES': (
#         'rest_framework.permissions.IsAuthenticatedOrReadOnly',
#     ),
#     'DEFAULT_AUTHENTICATION_CLASSES': (
#         'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
#         'rest_framework.authentication.SessionAuthentication',
#         'rest_framework.authentication.BasicAuthentication',
#     ),
# }

# REST_FRAMEWORK = {
#     # Use Django's standard `django.contrib.auth` permissions,
#     # or allow read-only access for unauthenticated users.
#     'DEFAULT_PERMISSION_CLASSES': (
#         'rest_framework.permissions.AllowAny',
#     ),
#     'DEFAULT_AUTHENTICATION_CLASSES': (
# 	'rest_framework.authentication.BasicAuthentication',
# 	'rest_framework.authentication.SessionAuthentication',
#         'rest_framework.authentication.TokenAuthentication',
#     )
# }


# SIMPLE_JWT={
#     'ACCESS_TOKEN_LIFETIME':timedelta(minutes=5),
#     'REFRESH_TOKEN_LIFETIME':timedelta(days=1),
#     # 'ROTATE_REFRESH_TOKENS':False,
#     # 'BLACKLIST_AFTER_ROTATION':True,
#     # 'UPDATE_LAST_LOGIN':False,
#     #
#     # 'ALGORITHM':'HS256',
#     # 'SIGNING_KEY':settings.SECRET_KEY,
#     # 'VERIFYING_KEY':None,
#     # 'AUDIENCE':None,
#     # 'ISSUER':None,
#
#     'AUTH_HEADER_TYPES':('Bearer',),
#     # 'AUTH_HEADER_NAME':'HTTP_AUTHORIZATION',
#     # 'USER_ID_FIELD':'id',
#     # 'USER_ID_CLAIM':'user_id',
#     #
#     # 'AUTH_TOKEN_CLASSES':('rest_framework_simplejwt.tokens.AccessToken'),
#     # 'TOKEN_TYPE_CLAIM':'token_type',
#     #
#     # 'JIT_CLAIM':'jti',
#     #
#     # 'SLIDING_TOKEN_REFRESH_EXP_CLAIM':'refresh_exp',
#     # 'SLIDING_TOKEN_LIFETIME':timedelta(minutes=5),
#     # 'SLIDING_TOKEN_REFRESH_LIFETIME':timedelta(days=1),
#
# }

# to overwrite the default django user table
# AUTH_USER_MODEL='users.User'
# django_heroku.settings(locals())
try:
    from .local_settings import *
except ImportError:
    pass


