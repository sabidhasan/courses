user_name = ARGV.first

prompt = '> '

puts "Hi #{user_name}."
puts "I'd like to ask you a q"
puts "Do you like me, #{user_name}?"
puts prompt
likes = $stdin.gets.chomp

puts "Where do you live #{user_name}"
puts prompt
lives = $stdin.gets.chomp

# A comma
puts "What kind of computer do you have?", prompt
computer = $stdin.gets.chomp

puts """
Alright, you said #{likes} about liking me.
You live in #{lives}. Not sure where that is.
And you hava a #{computer} computer. Nice.
"""
