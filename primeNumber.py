


	
	# Declare the variables
a,b = input();
i, j, flag = 0, 0, 0; 
    

for i in range(a, b + 1):

		# Skip 1 as1 is neither
		# prime nor composite
		if (i == 1):
			continue

		# flag variable to tell
		# if i is prime or not
		flag = 1
		
		for j in range(2, i // 2 + 1):
			if (i % j == 0):
				flag = 0
				break
			
		# flag = 1 means i is prime
		# and flag = 0 means i is not prime
if (flag == 1):
	print(i)
			
