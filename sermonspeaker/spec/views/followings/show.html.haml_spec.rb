require 'spec_helper'

describe "followings/show" do
  before(:each) do
    @following = assign(:following, stub_model(Following))
  end

  it "renders attributes in <p>" do
    render
  end
end
