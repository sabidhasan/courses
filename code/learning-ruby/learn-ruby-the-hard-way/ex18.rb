def print_two(*args)
  arg1, arg2 = args
  puts "Arg 1: #{arg1} and Arg 2: #{arg2}"
end

def print_two_again(arg1, arg2)
  puts "Arg 1 :#{arg1} and Arg2: #{arg2}"
end

def takes_one(arg1)
  puts "This only takes one: #{arg1}"
end

def takes_none()
  puts 'Hello!'
end

print_two(234, 'testing')
print_two_again(234, 'testing')
takes_none
takes_one(343453)
