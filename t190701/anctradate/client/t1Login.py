import requests
def client():
    #credentials = {"username": "mauro", "password": "Maaaaaaaaaa"}
    credentials = {"username": "utente", "password": "Maaaaaaaaaa"}

    response = requests.post("http://127.0.0.1:8000/api/rest-auth/login/",
                              data=credentials)

    print("Status Code: ", response.status_code)
    response_data = response.json()
    print(response_data)

if __name__ == "__main__":
    client()
