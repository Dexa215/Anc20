import requests
def client():

    token_h = "Token fd887909a9ed4d5f419bf77a57b002c4d1bfc7b8"
#    credentials = {"username": "UserTest1", "password": "cambiami123"}
    headers = {"Authorization": token_h}

# Richiesta REST con TOKEN ----------------------------------------------- TTTTT
    response = requests.get("http://127.0.0.1:8000/api/profiles/",
                            headers=headers)

    print("Status Code: ", response.status_code)
    response_data = response.json()
    print(response_data)


if __name__ == "__main__":
    client()
