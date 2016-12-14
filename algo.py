actualYear = 2016
actualMonth = 12
actualDay = 13

birthYear = 1982
birthMonth = 9
birthDay = 28

age = actualYear - birthYear

if actualMonth < birthMonth:
	age -= 1
	
elif actualMonth == birthMonth:
	if actualDay < birthDay:
		age -= 1

print age

tableau = [3,25,1,6,23,56]
switch = ""
sorted = "false"

while sorted == "false":
	moved = "false"
	i = 0
	while i < len(tableau):
		if tableau[i+1] < tableau[i]:
			switch = tableau[i]
			tableau[i] = tableau[i+1]
			tableau[i+1] = switch
			moved = true
	i += 1

	if moved == "false":
		sorted = "true"

print tableau

word = "anticonstitutionnellement"
char = "n"
result = 0
i = 0

while i < len(word):
	if word[i] == char:
		result += 1
	i += 1

print result

