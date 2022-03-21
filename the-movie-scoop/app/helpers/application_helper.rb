module ApplicationHelper
  def stars_helper(rating)
    stars = (0...rating.to_i).to_a.map do |_i|
      icon('star')
    end
    if rating == rating.to_i
      stars += (rating.to_i...10).to_a.map do |_i|
        icon('star-o')
      end
    else
      stars << icon('star-half-o')
      stars += ((rating.to_i + 1)...10).to_a.map do |_i|
        icon('star-o')
      end
    end
    stars.join.html_safe
  end

  def user_display_name(user = current_user)
    user.name || user.username
  end

  def custom_bootstrap_flash
    flash_messages = []
    flash.each do |type, message|
      type = 'success' if type == 'notice'
      type = 'error' if type == 'alert'
      text = "<script>toastr.#{type}('#{message}');</script>"
      flash_messages << text.html_safe if message
    end
    flash_messages.join("\n").html_safe
  end
end
