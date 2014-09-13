module DaresHelper
  def completion_for(dare, user)
    completion = user.completion_for(dare)
    completed = completion.persisted?
    yield(completion, completed)
  end
end
