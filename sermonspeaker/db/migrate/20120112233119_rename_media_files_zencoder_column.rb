class RenameMediaFilesZencoderColumn < ActiveRecord::Migration
  def change
    rename_column :media_files, :zencoder_output_id, :job_id
  end
end
