require './mencoder'
require './drive'

watch_unedited = false

#opticals = Drive.get_dvd_drives_as_openstruct
#puts 'insert a dvd first' unless opticals.find{|d| d.VolumeName }
#names = opticals.map{|d| d.Name + "\\" + " (" +  (d.VolumeName || 'Insert DVD and re-start') + ")"}

#if opticals.length != 1
#  dialog = GetDisk.new(self, names)
#  dialog.setSize 200,125
#  dialog.show
#  selected_idx = dialog.selected_idx
#else
selected_idx = 0
#  puts 'selecting user\'s only disk drive ' + names[0]
#end

#if selected_idx
#  disk = opticals[selected_idx]
#  prefix = names[selected_idx][0..2]
prefix = "d:\\"
puts "calculating disk's unique id..."
#md5sum = Drive.md5sum_disk(prefix)
#@_choose_dvd_drive = [prefix, 'INCEPTION', md5sum]

    
drive = prefix
dvd_volume_name = 'INCEPTION'
#md5sum = md5sum

@_edit_list_path = 'edl.txt'  #edl path goes here     #||= 
#begin
#  puts "#{drive}, #{dvd_volume_name}, #{md5sum}"
#  edit_list_path = single_edit_list_matches_dvd(md5sum)
#if !edit_list_path
#  fc = FileDialog.new(self)
#  fc.set_title "Please pick a DVD Delete List File (non matching found)"
#  fc.set_directory EDL_DIR
#  edit_list_path = fc.go
#end
#raise 'cancelled' unless edit_list_path
#  edit_list_path
#end

# reload it just in case it has changed on disk
descriptors = nil
edit_list_path = @_edit_list_path
descriptors = nil #parse_edl(edit_list_path)

dvd_title = dvd_volume_name
save_to = "./#{dvd_title}"

dvd_title_track = 1
require_deletion_entry = true
run_mplayer = false
delete_partials = true #unless start_time

start_time, end_time = nil

commands = Mencoder.commands edit_list_path, drive, save_to, start_time, end_time, dvd_title_track, delete_partials, require_deletion_entry # delete partials...

puts commands

exit()




temp_dir = Dir.tmpdir
temp_file = temp_dir + '/vlc.temp.bat'
File.write(temp_file, commands)

batch_commands = commands
success = true
lines = batch_commands.lines.to_a
total_size = lines.length.to_f
lines.each_with_index{|line, idx|
  if success
    puts "running #{line}"
    success = system_blocking(line)
    if line =~ /@rem /
      success = true # these fail fof some reason?
    else
      puts "\n", 'line failed: ' + line + "\n" + '   see troubleshooting in README.txt file!' unless success
    end
  end
}

if success
  # do stuff
else
  show_blocking_message_dialog("Failed--please examine console output and report back!\nAlso consult the troubleshooting section of the README file.", "Failed", JOptionPane::ERROR_MESSAGE)
end
