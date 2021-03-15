from rest_framework import permissions

class IsAdminUserOrReadOnly(permissions.BasePermission):
    """
    Allows access only to admin users.
    """
    def has_permission(self, request, view):
        return request.user and request.user.is_staff

class IsStaffOrReadOnly(permissions.BasePermission):
    """
    Allows access only to staff users.
    """
    message = 'aggiunta di eventi é consentita ai soli utenti STAFF'

    def has_permission(self, request, view):
        print("controllo has_permission...")
        print("method:",request.method)
        print("method safe:",request.method in permissions.SAFE_METHODS)
        print("permesso is staff: ", request.user.is_staff)
        print("permesso is superuser: ", request.user.is_superuser)
        print("user: ", request.user)

        return (
            request.method in permissions.SAFE_METHODS or
            request.user and request.user.is_staff
        )

#    def has_view_permission(self,request,view):
#        return False

#    def has_add_permission(self,request,view):
#        return False

#    def has_change_permission(self,request,view):
#        return False

#    def has_object_permission(self, request, view, obj):
#        if request.method in permissions.SAFE_METHODS:
#          return True
#        return False


class IsAuthorOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.author == request.user
