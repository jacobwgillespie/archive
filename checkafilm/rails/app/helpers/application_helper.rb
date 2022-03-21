module ApplicationHelper
  def page_title title=''
    content_for(:page_title, title) unless title.nil?
    @out ||= content_for(:page_title).blank? ? 'Check a Film' : "#{content_for(:page_title)} - Check a Film"
  end
end
