class BootstrapBreadcrumbs < SimpleNavigation::Renderer::Base

  def render(item_container)
      content_tag(:ul, li_tags(item_container).join(join_with), { id: item_container.dom_id, class: "#{item_container.dom_class} breadcrumb" })
  end

  protected

  def li_tags(item_container)
    item_container.items.inject([]) do |list, item|
      if item.selected?
        if include_sub_navigation?(item)
          list << content_tag(:li, link_to(item.name, item.url, {method: item.method}.merge(item.html_options.except(:class,:id)))) if item.selected?
          list.concat li_tags(item.sub_navigation)
        else
          list << content_tag(:li, item.name, { class: 'active' }) if item.selected?
        end
      end
      list
    end
  end

  def join_with
    @join_with ||= options[:join_with] || '<span class="divider">/</span>'.html_safe
  end
end

# Renders an ItemContainer as a <ul> element and its containing items as <li> elements.
# Prepared to use inside the topbar of Twitter Bootstrap http://twitter.github.com/bootstrap/#navigation
#
# Register the renderer and use following code in your view:
#   render_navigation(level: 1..2, renderer: :bootstrap_topbar_list, expand_all: true)
class BootstrapTopbarList < SimpleNavigation::Renderer::Base

  def render(item_container)
    if options[:is_subnavigation]
      ul_class = "dropdown-menu"
    else
      ul_class = "nav"
    end

    list_content = item_container.items.inject([]) do |list, item|
      li_options = item.html_options.reject {|k, v| k == :link}

      has_subnav = include_sub_navigation? item

      if has_subnav
        li_options[:class] = [li_options[:class], "dropdown"].flatten.compact.join(' ')
      end
      li_content = tag_for(item, has_subnav)
      if has_subnav
        li_content << render_sub_navigation_for(item)
      end
      list << content_tag(:li, li_content, li_options)
    end.join
    if skip_if_empty? && item_container.empty?
      ''
    else
      content_tag(:ul, list_content, { :id => item_container.dom_id, :class => [item_container.dom_class, ul_class].flatten.compact.join(' ') })
    end
  end

  def render_sub_navigation_for(item)
    item.sub_navigation.render(self.options.merge(:is_subnavigation => true))
  end

  protected

  def tag_for(item, has_subnav=false)
    name = (has_subnav) ? item.name + '<b class="caret"></b>' : item.name

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



# -*- coding: utf-8 -*-
# Configures your navigation
SimpleNavigation::Configuration.run do |navigation|
  # Specify a custom renderer if needed.
  # The default renderer is SimpleNavigation::Renderer::List which renders HTML lists.
  # The renderer can also be specified as option in the render_navigation call.
  navigation.renderer = BootstrapTopbarList

  # Specify the class that will be applied to active navigation items. Defaults to 'selected'
  navigation.selected_class = 'active'

  # Specify the class that will be applied to the current leaf of
  # active navigation items. Defaults to 'simple-navigation-active-leaf'
  navigation.active_leaf_class = 'active'

  # Item keys are normally added to list items as id.
  # This setting turns that off
  navigation.autogenerate_item_ids = false

  # You can override the default logic that is used to autogenerate the item ids.
  # To do this, define a Proc which takes the key of the current item as argument.
  # The example below would add a prefix to each key.
  # navigation.id_generator = Proc.new {|key| "my-prefix-#{key}"}

  # If you need to add custom html around item names, you can define a proc that will be called with the name you pass in to the navigation.
  # The example below shows how to wrap items spans.
  # navigation.name_generator = Proc.new {|name| "<span>#{name}</span>"}

  # The auto highlight feature is turned on by default.
  # This turns it off globally (for the whole plugin)
  # navigation.auto_highlight = false

  # Define the primary navigation
  navigation.items do |primary|
    primary.item :about, 'About', '/about'
    primary.item :contact, 'Contact', '/contact'
    primary.item :login, 'Login / Register', '/dashboard', :unless => Proc.new { user_signed_in? }

    primary.item :new_sermon, 'Add Sermon', new_sermon_path,  :hilights_on => nil,
                                                              :'data-toggle' => 'modal',
                                                              :'data-target' => '#new-sermon-modal'

    primary.item :account, 'Your Account', '#' do |sub|
      sub.item :dashboard, 'Dashboard', '/dashboard'
      sub.item :details, 'Edit My Information', edit_user_registration_path
      sub.item :divider, '', '', :class => 'divider'
      sub.item :logout, 'Logout', destroy_user_session_path, :method => :delete
    end

    # Add an item to the primary navigation. The following params apply:
    # key - a symbol which uniquely defines your navigation item in the scope of the primary_navigation
    # name - will be displayed in the rendered navigation. This can also be a call to your I18n-framework.
    # url - the address that the generated item links to. You can also use url_helpers (named routes, restful routes helper, url_for etc.)
    # options - can be used to specify attributes that will be included in the rendered navigation item (e.g. id, class etc.)
    #           some special options that can be set:
    #           :if - Specifies a proc to call to determine if the item should
    #                 be rendered (e.g. <tt>:if => Proc.new { current_user.admin? }</tt>). The
    #                 proc should evaluate to a true or false value and is evaluated in the context of the view.
    #           :unless - Specifies a proc to call to determine if the item should not
    #                     be rendered (e.g. <tt>:unless => Proc.new { current_user.admin? }</tt>). The
    #                     proc should evaluate to a true or false value and is evaluated in the context of the view.
    #           :method - Specifies the http-method for the generated link - default is :get.
    #           :highlights_on - if autohighlighting is turned off and/or you want to explicitly specify
    #                            when the item should be highlighted, you can set a regexp which is matched
    #                            against the current URI.  You may also use a proc, or the symbol <tt>:subpath</tt>.
    #
    #primary.item :key_1, 'name', url, options

    # Add an item which has a sub navigation (same params, but with block)
    #primary.item :key_2, 'name', url, options do |sub_nav|
      # Add an item to the sub navigation (same params again)
    #  sub_nav.item :key_2_1, 'name', url, options
    #end

    # You can also specify a condition-proc that needs to be fullfilled to display an item.
    # Conditions are part of the options. They are evaluated in the context of the views,
    # thus you can use all the methods and vars you have available in the views.
    #primary.item :key_3, 'Admin', url, :class => 'special', :if => Proc.new { current_user.admin? }
    #primary.item :key_4, 'Account', url, :unless => Proc.new { logged_in? }

    # you can also specify a css id or class to attach to this particular level
    # works for all levels of the menu
    # primary.dom_id = 'menu-id'
    # primary.dom_class = 'nav'

    # You can turn off auto highlighting for a specific level
    # primary.auto_highlight = false

  end

end
