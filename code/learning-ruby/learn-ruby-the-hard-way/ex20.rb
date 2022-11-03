input_file = ARGV.first

def print_all(file)
  puts file.read
end

def rewind(file)
  file.seek(0)
end

def print_a_line(line_count, file)
  # puts "#{line_count} in #{file.gets.chomp}"
  puts "#{line_count} in #{file.readline}"
end

current_file = File.open(input_file)

puts "First, lets put the whole file in here #{input_file}"
print_all(current_file)

puts 'Now lets rewind'
rewind(current_file)

puts 'Now lets print first three lines'
(1..3).each do |i|
  print_a_line(i, current_file)
end
