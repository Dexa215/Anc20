from django_registration.forms  import RegistrationForm
from django.contrib.auth.models import User
from users.models               import CustomUser

class CustomUserForm(RegistrationForm):

    class Meta(RegistrationForm.Meta):
        model = CustomUser
