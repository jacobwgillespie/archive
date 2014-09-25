class AddCallbackTextToMediaFile < ActiveRecord::Migration
  def change
    add_column :media_files, :callback_text, :text
  end
end
