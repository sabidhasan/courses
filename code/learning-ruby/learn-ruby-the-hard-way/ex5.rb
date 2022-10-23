name = "Asa HSA"
age = 35
height = 74 * 2.54 # centimeters
weight = 177
eyes = "Brown"
teeth = "white"
hair = "black"

puts "Let's talk about #{name}"
puts "He's #{height} cm tall"
puts "He's #{weight} pound heavy"
puts "Actually that's not too heavy"
puts "He's got #{eyes} eyes and #{hair} hair."
puts "His teeth are usually #{teeth} depending on the coffee."

# This line is tricky
puts "If i add #{age}, #{height} and #{weight} I get #{(age + height + weight).to_i}"
