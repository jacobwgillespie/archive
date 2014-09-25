require 'spec_helper'

describe "followings/index" do
  before(:each) do
    assign(:followings, [
      stub_model(Following),
      stub_model(Following)
    ])
  end

  it "renders a list of followings" do
    render
  end
end
