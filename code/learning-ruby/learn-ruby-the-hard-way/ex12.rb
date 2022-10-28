print "Guve me a number: "
number = gets.to_i

bugger = number * 100
puts "A bigger number: #{bugger}"

print "Give me another numebr: "
another_num = gets.to_i

smaller = another_num / 100.0
puts "A smaller number  is #{smaller}"

print "I will give you 10% of a number: "
puts "$ #{(gets.to_f * 0.1).round(2)}"
