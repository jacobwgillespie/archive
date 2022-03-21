class SimilarMovie < ActiveRecord::Base
  belongs_to :movie
  belongs_to :similar, class_name: 'Movie'
end
