class Ability
  include CanCan::Ability

  def initialize(user)

    # user ||= User.new # no guest users

    # users can read every model
    can :read, :all


    # users can search and geo-search everything
    can :search, :all
    can :geo, :all


    # done if the user is a guest
    return if user.nil?


    # users can create only one church,
    # can update their own church,
    # can update churches then manage,
    # and can destroy only the church they own
    can :create, Church unless user.church?
    can :update, Church, :user_id => user.id
    cannot :destroy, Church


    # admin users can manage everything
    # and can bend space and time
    if user.is? :admin
      can :manage, :all if user.is? :admin
      can :bend_spacetime if user.is? :admin
    end


    # users can only manage speakers, sermons,
    # and media files if they manage a church
    if user.manages_a_church?

      # users can create speakers for churches they can update,
      # can update speakers for churches they can update,
      # and can destroy speakers for churches they can update
      can :create, Speaker, :church => {:user_id => user.id}
      can :update, Speaker, :church => {:user_id => user.id}
      can :destroy, Speaker, :church => {:user_id => user.id}

      # users can create sermons for churches they can update,
      # can update sermons for churches they can update,
      # and can destroy sermons for churches they can update
      can :create, Sermon, :church => {:user_id => user.id}
      can :update, Sermon, :church => {:user_id => user.id}
      can :destroy, Sermon, :church => {:user_id => user.id}

      # users can create media files for sermons they can update,
      # can update media files for sermons they can update,
      # and can destroy media files for sermons they can update
      can :create, MediaFile, :sermon => {:church => {:user_id => user.id}}
      can :update, MediaFile, :sermon => {:church => {:user_id => user.id}}
      can :destroy, MediaFile, :sermon => {:church => {:user_id => user.id}}

    end

    # For more docs, see https://github.com/ryanb/cancan/wiki/Defining-Abilities
  end
end
