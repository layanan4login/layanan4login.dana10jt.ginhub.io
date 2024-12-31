 import requests

proxies = {
    "http": "http://proxy-server.com:8080",  # Ganti dengan proxy lo
    "https": "http://proxy-server.com:8080"
}

url = "https://layanan4-hadi4h1dana10jt.vercel.app/"

try:
    response = requests.get(url, proxies=proxies)
    print(response.text)
except Exception as e:
    print(f"Error: {e}")