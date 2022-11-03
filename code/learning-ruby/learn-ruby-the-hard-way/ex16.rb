filename = ARGV.first

puts "We're going to erase #{filename}"
print "If cool, enter 'Y' > "

response = $stdin.gets.chomp

if response.downcase == 'y' && File.file?(filename)
  # Open the file
  target = open(filename, 'w+')
  target.truncate(0)

  puts "Enter some text"
  target.write($stdin.gets)

  puts "Closing file"
  target.close
end
