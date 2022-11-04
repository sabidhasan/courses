require "test_helper"

class ApplicationHelperTest < ActionView::TestCase
  test "it returns the base title" do
    assert_equal full_title(page: ""), "Rails Tutorial"
  end

  test "it handles nil" do
    assert_equal full_title(page: nil), "Rails Tutorial"
  end

  test "it contains the page title" do
    assert_equal full_title(page: "Test Page"), "Test Page | Rails Tutorial"
  end
end
