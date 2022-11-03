# Prints the counts given
def cheese_and_crackers(cheese_count, box_count)
  puts "You have #{cheese_count} cheese and #{box_count} boxes here"
end

# Pass integers directly in
puts 'Calling with numbers directly'
cheese_and_crackers(20, 30)

# Create a variable and pass it in
puts 'Or we can use variables'
cheese_count, box_count = 30, 343
cheese_and_crackers(cheese_count, box_count)

puts 'Do math'
cheese_and_crackers(10 + 4, 543 - 522)

puts 'We can combine the two, as well'
cheese_and_crackers(cheese_count + 34, 42)

print 'What is the cheese count here? '
new_cheese_count = gets.chomp.to_i
cheese_and_crackers(new_cheese_count, 42)
