import requests

def client():
    token_h = "Token 38f547ed81606244f59fb5992b42d92ec1f714eb"  #utente
    # token_h = "Token ce9df7c276195a06dda5446cd2f05193037be4b3"  #mauro
    
    # credentials = {"username": "admin", "password": "asdasdasd"}
    # response = requests.post("http://127.0.0.1:8000/api/rest-auth/login/",
    #                          data=credentials)
    headers = {"Authorization": token_h}
    response = requests.get("http://127.0.0.1:8000/api/profiles/",
                            headers=headers)

    print("Status Code: ", response.status_code)
    response_data = response.json()
    print(response_data)

if __name__ == "__main__":
    client()
