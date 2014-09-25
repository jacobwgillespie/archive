require 'spec_helper'

describe "followings/new" do
  before(:each) do
    assign(:following, stub_model(Following).as_new_record)
  end

  it "renders new following form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => followings_path, :method => "post" do
    end
  end
end
