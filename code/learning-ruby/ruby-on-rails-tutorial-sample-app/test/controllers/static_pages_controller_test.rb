require "test_helper"

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @base_title = "Rails Tutorial"
  end

  test "root route" do
    get root_url
    assert_response :success
  end

  test "should get home" do
    get root_path
    assert_select "title", "#{@base_title}"
    assert_response :success
  end

  test "should get help" do
    get help_path
    assert_select "title", full_title(page: "Help")
    assert_response :success
  end

  test "should get about" do
    get aboot_path
    assert_select "title", full_title(page: "About")
    assert_response :success
  end


  test "should get contact us" do
    get contact_us_path
    assert_response :success
    assert_select "title", full_title(page: "Contact Us")
  end
end
