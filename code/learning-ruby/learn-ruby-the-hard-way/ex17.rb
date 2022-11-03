read_file, output_file = ARGV

puts "Copying #{read_file} to #{output_file}"

if File.readable?(read_file)
  input = File.open(read_file, 'r')

  state = File.exist?(output_file) ? 'already' : 'does not'
  puts "The file #{state} exist"

  output = File.open(output_file, 'w')
  output.write(input.readlines.join(''))
  output.close
  input.close
else
  puts 'Could not read file...'
end

# open(ARGV[0], 'w').write(File.open(ARGV[1], 'r').readlines.join("")) if File.readable?(ARGV[0])
