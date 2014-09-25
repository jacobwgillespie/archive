# monkey-patch to fix issue with carrierwave
# TODO: it is broken
module PaperTrail
  module Model
    module InstanceMethods
      private
        def item_before_change
          previous = self.dup
          # `dup` clears timestamps so we add them back.
          all_timestamp_attributes.each do |column|
            previous[column] = send(column) if respond_to?(column) && !send(column).nil?
          end
          previous.tap do |prev|
            prev.id = id
            changed_attributes.each do |attr, before|
              if defined?(CarrierWave::Uploader::Base) && before.is_a?(CarrierWave::Uploader::Base)
                prev.send(:write_attribute, attr, before.url && File.basename(before.url))
              else
                prev[attr] = before
              end
            end
          end
        end
    end
  end
end
