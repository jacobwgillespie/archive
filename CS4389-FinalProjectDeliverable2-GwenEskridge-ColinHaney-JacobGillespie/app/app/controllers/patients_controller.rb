class PatientsController < ApplicationController
  before_action :authenticate_user!

  def index
    @patients = current_user.patients
  end
end
