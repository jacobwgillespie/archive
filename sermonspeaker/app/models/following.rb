class Following < ActiveRecord::Base
  belongs_to :user, :counter_cache => true
  belongs_to :entity, :polymorphic => true, :counter_cache => true
end
