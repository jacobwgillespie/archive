module ApplicationHelper
  def star_rating(stars)
    content_tag(:div, '', :rel => 'stars', :'data-rating' => stars)
  end

  def page_title title=''
    content_for(:page_title, title) unless title.nil?
    @out ||= content_for(:page_title).blank? ? "MyGameList.co" : "#{content_for(:page_title)} - MyGameList.co"
  end

  def changelog(object)
    render 'history/changelog', :object => object
    return # Disabling this at the moment
    return if object.versions.empty?
    [
      content_tag(:p) do
        content_tag(:small) do
          link_to 'History', '#', :class => 'changelog'
        end
      end,
      content_tag(:div, :id => 'changelog') do
        [
          content_tag(:h2, 'Changelog'),
          content_tag(:table, :class => 'table table-bordered') do
            [
              content_tag(:thead) do
                content_tag(:tr) do
                  [
                    content_tag(:th, 'Date'),
                    content_tag(:th, 'User'),
                    content_tag(:th, 'Changes')
                  ].join.html_safe
                end
              end,
              content_tag(:tbody) do
                object.versions.map do |version|
                  user = User.find(version.whodunnit)
                  content_tag(:tr) do
                    [
                      content_tag(:td, version.created_at),
                      content_tag(:td, link_to(user.name, user)),
                      content_tag(:td) do
                        if version.changeset
                          content_tag(:dl) do
                            version.changeset.map do |key, value|
                              [
                                content_tag(:dt, key),
                                content_tag(:dd) do
                                  content_tag(:pre) do
                                    Differ.diff_by_word(value.second.to_s, value.first.to_s).to_s.html_safe
                                  end
                                end
                              ].join.html_safe
                            end.join.html_safe
                          end
                        else
                          ''
                        end
                      end
                    ].join.html_safe
                  end
                end.join.html_safe
              end
            ].join.html_safe
          end
        ].join.html_safe
      end
    ].join.html_safe
  end
end
