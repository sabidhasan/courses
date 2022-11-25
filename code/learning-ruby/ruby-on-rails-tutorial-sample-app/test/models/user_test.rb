require "test_helper"

class UserTest < ActiveSupport::TestCase
  def setup
    @test_user = User.new(name: "Example User", email: "test@example.com")
  end

  test "should be valid" do
    assert @test_user.valid?
  end

  test "fails empty names" do
    @test_user.name = ""
    assert !@test_user.valid?
  end

  test "it fails names that are too long" do
    @test_user.name = "x" * 51
    puts "VLKAID", @test_user.valid?
    assert !@test_user.valid?
  end
end
