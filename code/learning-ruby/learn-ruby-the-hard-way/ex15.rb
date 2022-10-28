# ARGV gets the argument from CLI params
file_name = ARGV[0]

# Check if something provided, if not, get from user now
if file_name.nil?
  print "What is the file name? "
  file_name = $stdin.gets.chomp
end

# If the file is readable and exists, we try to read it
if File.readable? file_name
  File.open(file_name, 'r') do |f|
    # Read the file entirely
    puts f.readlines
  end
else
  # Otherwise, file isn't readable
  puts "#{file_name} is not a readable file!"
end
