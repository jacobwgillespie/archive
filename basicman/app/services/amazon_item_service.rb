class AmazonItemService
  attr_reader :url

  def initialize(url)
    @url = url
  end

  def asin
    @asin ||= begin
      match = url.match /\/dp\/([0-9a-zA-Z]+)/
      match ||= url.match /\/product\/([0-9a-zA-z]+)/
      match ? match[1] : url
    end
  end

  def images
    @images ||= begin
      sets = amazon_details['ImageSets']['ImageSet']
      sets = sets.is_a?(Array) ? sets : [sets]

      sets.map do |set|
        highest_height = 0
        highest_url = nil

        set.keys.each do |key|
          image = set[key]
          if image['Height']
            height = image['Height']['__content__'].to_i
            if height > highest_height
              highest_height = height
              highest_url = image['URL']
            end
          end
        end

        highest_url
      end.reverse
    end
  end

  def offers
    @offers ||= begin
      results = amazon_details['Offers']['Offer']
      results = results.is_a?(Array) ? results : [results]

      results.map do |result|
        {
          id: result['OfferListing']['OfferListingId'],
          condition: result['OfferAttributes']['Condition'],
          price: result['OfferListing']['Price']['Amount'].to_i,
          availability: result['OfferListing']['Availability'],
        }
      end
    end
  end

  def amazon_details
    @amazon_details ||= begin
      res = api.item_lookup(
        query: {
          ItemId: asin,
          ResponseGroup: 'Images,ItemAttributes,Offers',
        },
      )
      res.to_h['ItemLookupResponse']['Items']['Item']
    end
  end

  def api
    Amazon.client
  end
end
