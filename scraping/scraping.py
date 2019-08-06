import requests
from bs4 import BeautifulSoup as bs

r = requests.get("https://www.ilmeteo.it/meteo/Roma")
contenuto = bs(r.text)
print(contenuto.title)
print(contenuto.title.string)

print(contenuto.p)
print(contenuto.a["href"])

for link in contenuto.findAll("a"):
	print(link.get("href"))


# temps = contenuto.findAll("span", {"class": "tmax"})
# for temp in temps:
# 	print(temp.text)