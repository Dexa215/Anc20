from django_registration.forms import RegistrationForm
from django.contrib.auth.models import User

#class CustomUserForm(RegistrationForm):

#    class Meta(RegistrationForm.Meta):
#        model = CustomUser


class CustomFormUser(RegistrationForm):

    class Meta(RegistrationForm.Meta):
        model = User
