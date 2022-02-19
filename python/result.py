import csv

chart_input = []


with open('python/thesis.csv') as file:
	reader = csv.reader(file)
	count = 0

	for row in reader:
		output = {'time':row[0], 'black_sand':{'trial1':row[1], 'trial2':row[2], 'trial3':row[3]}, 
					'pebbles':{'trial1':row[4], 'trial2':row[5], 'trial3':row[6]}, 
					'combined':{'trial1':row[7], 'trial2':row[8], 'trial3':row[9]},
					'average_black_sand':row[10], 'average_pebbles':row[11], 'average_combined':row[12]}
		chart_input.append(output)


# print(chart_input[:21])		#average velocity
# print(chart_input[21:42])		#collector temperature
# print(chart_input[42:63])   	#chimney temperature
# print(chart_input[63:84])		#density
# print(chart_input[84:105])	#power
print(chart_input[105:126])	#auc