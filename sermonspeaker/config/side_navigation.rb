# Renders an ItemContainer as a <ul> element and its containing items as <li> elements.
# Prepared to use inside the topbar of Twitter Bootstrap http://twitter.github.com/bootstrap/#navigation
#
# Register the renderer and use following code in your view:
#   render_navigation(level: 1..2, renderer: :bootstrap_topbar_list, expand_all: true)
class BootstrapSidebarList < SimpleNavigation::Renderer::Base

  def render(item_container)
    return if options[:is_subnavigation]
    ul_class = "nav list"
    list_content = item_container.items.inject([]) do |list, item|
      li_options = item.html_options.reject {|k, v| k == :link}
      li_options[:class] = [li_options[:class], "nav-header"].flatten.compact.join(' ') if item.url.nil?
      li_content = tag_for(item)
      list << content_tag(:li, li_content, li_options)
    end.join
    if skip_if_empty? && item_container.empty?
      ''
    else
      content_tag(:ul, list_content, { :id => item_container.dom_id, :class => [item_container.dom_class, ul_class].flatten.compact.join(' ') })
    end
  end

  protected

  def tag_for(item)
    name = item.name

    if item.url.nil?
      content_tag('span', name, link_options_for(item).except(:method))
    else
      link_to(name, item.url, link_options_for(item))
    end
  end

  # Extracts the options relevant for the generated link
  #
  def link_options_for(item)
    special_options = {:method => item.method}.reject {|k, v| v.nil? }
    link_options = item.html_options[:link] || {}
    opts = special_options.merge(link_options)
    opts[:class] = [link_options[:class], item.selected_class, dropdown_link_class(item)].flatten.compact.join(' ')
    opts[:'data-toggle'] = 'dropdown' if include_sub_navigation? item
    opts.delete(:class) if opts[:class].nil? || opts[:class] == ''
    opts
  end

  def dropdown_link_class(item)
    if include_sub_navigation?(item) && !options[:is_subnavigation]
      "dropdown-toggle"
    end
  end
end

SimpleNavigation::Configuration.run do |navigation|

  navigation.renderer = BootstrapSidebarList
  navigation.selected_class = 'active'
  navigation.active_leaf_class = 'active'
  navigation.autogenerate_item_ids = false

  navigation.items do |primary|
    primary.item :header1, 'Main Menu'
    primary.item :home, '<i class="icon-home"></i> Home', '/'
    primary.item :sermons, '<i class="icon-book"></i> Sermons', sermons_path, :highlights_on => /#{sermons_path}/
    primary.item :churches, '<i class="icon-th-list"></i> Churches', churches_path, :highlights_on => /#{churches_path}/
    primary.item :speakers, '<i class="icon-user"></i> Speakers', speakers_path, :highlights_on => /#{speakers_path}/
    primary.item :login, '<i class="icon-th"></i> Login / Register', '/dashboard', :unless => Proc.new { user_signed_in? }
    primary.item :account, '<i class="icon-th"></i> Your Account', '/dashboard', :if => Proc.new { user_signed_in? }

    primary.item :header2, 'Your Church', :if => Proc.new { user_signed_in? and current_user.manages_a_church? }
    primary.item :new_sermon, '<i class="icon-plus"></i> Add Sermon', new_sermon_path,  :if => Proc.new { can? :create, Sermon },
                                                              :hilights_on => nil,
                                                              :'data-toggle' => 'modal',
                                                              :'data-target' => '#new-sermon-modal'
    primary.item :new_speaker, '<i class="icon-plus"></i> Add Speaker', new_speaker_path,   :if => Proc.new { can? :create, Speaker },
                                                                  :hilights_on => nil,
                                                                  :'data-toggle' => 'modal',
                                                                  :'data-target' => '#new-speaker-modal'
  end

end
