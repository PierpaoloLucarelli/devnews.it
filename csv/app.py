import csv
with open('dati.csv', 'rb') as csvfile:
	dati = csv.reader(csvfile, delimiter=',', quotechar='|')
	for row in dati:
		print ', '.join(row)