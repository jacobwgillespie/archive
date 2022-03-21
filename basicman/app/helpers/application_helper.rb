module ApplicationHelper
  def escape_morph_javascript(html)
    escape_javascript(html.strip.html_safe)
  end
end
