require 'digest/md5'
require 'ostruct'

class Drive

 def self.md5sum_disk(dir)
  digest = Digest::MD5.new()
  files  = Dir[dir + "VIDEO_TS/*.IFO"]
  files.sort.each{|f|
    digest << File.binread(f) 
  }
  raise 'drive might not yet have disc in it? ' + dir unless files.length > 0
  digest.hexdigest
 end

 def self.get_dvd_drives_as_openstruct
   #disks = WMI::Win32_LogicalDisk.find(:all)
   d2 = OpenStruct.new
   d2.VolumeName = 'INCEPTION' #d.VolumeName
   d2.Name = 'd:\\' #d.Name
   return d2
 end
  
#def self.get_drive_with_most_space_with_slash
#  disks = WMI::Win32_LogicalDisk.find(:all)
#  most_space = disks.sort_by{|d| d.FreeSpace.to_i}[-1]
#  most_space.Name + "\\"
#end

end

