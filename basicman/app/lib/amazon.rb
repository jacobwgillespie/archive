module Amazon
  def self.client
    request = Vacuum.new
    request.configure(
      aws_access_key_id: Rails.application.secrets.amazon_access_key,
      aws_secret_access_key: Rails.application.secrets.amazon_secret_key,
      associate_tag: Rails.application.secrets.amazon_tag,
    )
    request
  end
end
