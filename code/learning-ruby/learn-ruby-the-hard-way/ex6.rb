types_of_people = 10
# String interpolation with integers
x = "There are #{types_of_people} types of people"
binary = "binary"
do_not = "don't"
# String interpolation with strings (ONLY WORKS WITH DOUBLE QUOTES)
y = "Those who know #{binary} and those who #{do_not}"

p x
p y

p "I said: #{x}."
p "I also said '#{y}'."

hilarious = false
# String concatenation with booleans
joke_evaluation = "Is't that joke so funny? #{hilarious}"

p joke_evaluation

w = "This is the left side of..."
e = "a string with a right side"
# String concatenation using + operator
puts w + e
