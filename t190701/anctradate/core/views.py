from django.contrib.auth.mixins     import LoginRequiredMixin
from django.shortcuts import redirect
from django.views.generic.base      import TemplateView

from django.conf                    import settings
from django.core.mail               import send_mail

from django.http                    import HttpResponse, HttpResponseNotFound
import datetime

class IndexTemplateView(LoginRequiredMixin, TemplateView):


    def get_template_names(self):
        if settings.DEBUG:
            template_name = "index-dev.html"
        else:
            template_name = "index.html"
        return template_name




class IndexTemplateViewTEST(TemplateView):

#   send_mail(
#   subject = 'Thank you for registering to our site',
#   message = ' it  means a world to us ',
#   from_email = settings.EMAIL_HOST_USER,
#   recipient_list = ['receiver@gmail.com']
#    ['pydexo@gmail.com']
#    fail_silently=False
#  )

    def get_template_names(self):
        template_name = "indexTEST.html"
        return template_name


#TEST 2019 11 11
def email(request):
    subject = 'Thank you for registering to our site'
    message = ' it  means a world to us '
    email_from = settings.EMAIL_HOST_USER
    recipient_list = ['receiver@gmail.com',]
    send_mail( subject, message, email_from, recipient_list )
    return redirect('redirect to a new page')


#test...

def dexo_current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>DEXO: It is now %s.</body></html>" % now.day

    return HttpResponse(html)
