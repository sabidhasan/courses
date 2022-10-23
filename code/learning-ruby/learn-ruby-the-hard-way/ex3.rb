puts "I will now count my chickens"
puts "Hens #{25 + 30 / 6.0} number of hens!"
puts "Roosters #{100 - 25 * 3 % 4} roosters"

puts "Now count eggs"

# This line does order of operations. Addition/subtraction happens at once
# and division and multiplication are on their own!
puts 3 + 2 + 1 - 5 + 4 % 2 - 1 / 4.0 + 6

puts "Is it true that 3 + 2 < 5 - 7?"
puts 3 + 2 < 5 - 7

puts "What is 3 + 2? It is #{3 + 2}"
puts "What is 5 - 8? It is #{5 - 8}"

puts "Oh thqt is why it is false"

puts "How about some more?"

puts "Is it greater? #{5 > -2}"
puts "Is it greater or equal #{5 >= -2}"
puts "Is it less or equal? #{5 <= -2}"
