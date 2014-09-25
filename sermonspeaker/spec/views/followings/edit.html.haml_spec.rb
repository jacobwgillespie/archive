require 'spec_helper'

describe "followings/edit" do
  before(:each) do
    @following = assign(:following, stub_model(Following))
  end

  it "renders the edit following form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => followings_path(@following), :method => "post" do
    end
  end
end
