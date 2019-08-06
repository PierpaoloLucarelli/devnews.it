import pyqrcode
url = pyqrcode.create('https://devnews.it')
url.svg('uca-url.svg', scale=8)
print(url.terminal(quiet_zone=1))

url.svg('uca.svg', scale=4, background="white", module_color="#7D007D")
url.png('code.png', scale=5, background="#fff", module_color="#7D007D")