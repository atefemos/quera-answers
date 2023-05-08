valid_input = [1, 1, 2, 2, 2, 8]

x = input().split()

for i in range(len(valid_input)):
    print(valid_input[i] - int(x[i]),end=" ")