module MoviesHelper
  def rt_image(rating)
    name = case rating
           when 'Certified Fresh'
             'certified_fresh.png'
           else
             return rating
           end
    image_tag name, height: 40, class: 'rt-image'
  end

  def score_class(score)
    return unless score
    return 'label-success' if score >= 7.5
    return 'label-primary' if score >= 5
    return 'label-warning' if score >= 2.5
    'label-danger'
  end

  def source_friendly_name(source)
    case source
    when 'amazon_video_rental'
      'Amazon Rental'
    when 'amazon_video_purchase'
      'Amazon Video'
    when 'amazon_prime_instant_video'
      'Amazon Prime Instant Video'
    when 'apple_itunes_rental'
      'iTunes Rental'
    when 'sony_rental'
      'PlayStation Rental'
    when 'sony_purchase'
      'PlayStation Purchase'
    when 'amazon_dvd'
      'Amazon DVD'
    when 'amazon_bluray'
      'Amazon Blu-Ray'
    when 'netflix_dvd'
      'Netflix DVD'
    when 'netflix_instant'
      'Netflix Instant Streaming'
    when 'apple_itunes_purchase'
      'iTunes Purchase'
    when 'vudu_rental'
      'Vudu Rental'
    when 'vudu_purchase'
      'Vudu Purchase'
    when 'android_purchase'
      'Google Play'
    else
      source
    end
  end
  def source_icon(source)
    case source
    when 'amazon_video_rental', 'amazon_dvd', 'amazon_bluray', 'amazon_video_purchase', 'amazon_prime_instant_video'
      'amazon.png'
    when 'apple_itunes_rental', 'apple_itunes_purchase'
      'apple.png'
    when 'sony_rental', 'sony_purchase'
      'sony.png'
    when 'netflix_dvd', 'netflix_instant'
      'netflix.png'
    when 'vudu_rental', 'vudu_purchase'
      'vudu.png'
    when 'android_purchase', 'android_rental'
      'play.png'
    else
      source
    end
  end
end
