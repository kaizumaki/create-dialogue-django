from .base import *
import environ

env = environ.Env(DEBUG=(bool, False))
environ.Env.read_env(os.path.join(BASE_DIR, '../env/development/.env'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS += [
    'silk',
]

MIDDLEWARE += [
    'silk.middleware.SilkyMiddleware',
]

# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases
import pymysql
pymysql.install_as_MySQLdb()
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': env('MYSQL_DATABASE'),
        'USER': env('MYSQL_USER'),
        'PASSWORD': env('MYSQL_PASSWORD'),
        'HOST': 'db',
        'OPTIONS': {
            'charset': 'utf8mb4',
        },
    }
}

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, '../static')


DEBUG_TOOLBAR_CONFIG = {
    'SHOW_TEMPLATE_CONTEXT': True,
}

# LINE

CHANNEL_ACCESS_TOKEN = env('CHANNEL_ACCESS_TOKEN')
LINE_ACCESS_SECRET = env('LINE_ACCESS_SECRET')
