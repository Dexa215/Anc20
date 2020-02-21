import requests
def client():
    # token_h = "Token aeaceb6088d21a8b6baa57ac0b098e687103fdde"
    # credentials = {"username": "admin", "password": "asdasdasd"}
    data = {
         "username" : "UserTest1",
         "email"    : "UserTest1@test.com",
         "password1": "cambiami123",
         "password2": "cambiami123"
     }
    response = requests.post("http://127.0.0.1:8000/api/rest-auth/registration/", data=data)

    print("Status Code  : ", response.status_code)
    print("text         : ", response.text)
    response_data = response.json()
    print(response_data)

if __name__ == "__main__":
    client()
