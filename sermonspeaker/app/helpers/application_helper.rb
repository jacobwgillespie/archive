module ApplicationHelper
  def page_title title=''
    content_for(:page_title, title) unless title.nil?
    @out ||= content_for(:page_title).blank? ? "Sermon Speaker" : "#{content_for(:page_title)} - Sermon Speaker"
  end

  def js_ability permission, value=true
    flash[:can] ||= {}
    flash[:can][permission] = value
    flash[:can][:keys] ||= []
    flash[:can][:keys] << permission
  end

  def media_file_type_image media_file
    asset_path "file-types/#{media_file.asset_type}.png"
  end
end
