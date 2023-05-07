input = {
  "groups": 3,
  "students": [
    {"name": "Ava", "noisy": true, "understands": true, "fights_with": ["Noah", "Madison", "Gavin"]},
    {"name": "Madison", "noisy": false, "understands": false, "fights_with": ["Olivia", "Kaylee"]},
    {"name": "Daniel", "noisy": true, "understands": true, "fights_with": []},
    {"name": "Olivia", "noisy": false, "understands": false, "fights_with": ["Mia"]},
    {"name": "Noah", "noisy": false, "understands": true, "fights_with": ["Kaylee"]},
    {"name": "Mia", "noisy": true, "understands": false, "fights_with": []},
    {"name": "Jayden", "noisy": false, "understands": false, "fights_with": ["Mia", "Gavin", "Kaylee"]},
    {"name": "Brianna", "noisy": true, "understands": true, "fights_with": []},
    {"name": "Gavin", "noisy": false, "understands": false, "fights_with": ["Noah"]},
    {"name": "Kaylee", "noisy": true, "understands": false, "fights_with": []}
  ]
}

def valid_groups?(groups, all_students)
  students = groups.flatten.uniq
  return false unless students.length == all_students.length

  !groups.map { |g| valid_group?(g) }.include?(false)
end

def valid_group?(student_group)
  # check noisy
  return false if student_group.select { |student| student[:noisy] }.length > 2

  # check smart
  return false if student_group.select { |student| student[:understands] }.length == 0

  # check fight
  group_names = student_group.map { |s| s[:name] }
  student_group.each do |student|
    student[:fights_with].each do |name|
      return false if group_names.include?(name)
    end
  end

  true
end

all_students = input[:students]

all_possible_groups = []
(0..all_students.length).each do |i|
  all_students.combination(i).each do |g|
    all_possible_groups << g
  end
end

all_possible_combinations = all_possible_groups
(1..input[:groups] - 1).each do |i|
  all_possible_combinations = all_possible_combinations.product(all_possible_groups)
end

puts all_possible_groups[2].inspect

all_possible_combinations.each do |possible_solution|
  if valid_groups?(possible_solution, all_students)
    puts possible_solution
    exit
  end
end
