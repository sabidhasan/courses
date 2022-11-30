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
    assert !@test_user.valid?
  end

  test "email validations with valid addresses" do
    valid_addresses = %w(test@example.com TEST@examPLE.Com te.st@example.co.uk te.st+something@ex.com a_b-c@abc.net)

    valid_addresses.each do |email|
      @test_user.email = email
      assert @test_user.valid?, "Email #{email.inspect} should be valid"
    end
  end

  test "email validations with invalid addresses" do
    invalid_addresses = %w(test_example.com test@exam..com TEST@examPLE,Com te.st@example.co. foo@bar+baz.com a_b-)

    invalid_addresses.each do |email|
      @test_user.email = email
      assert_not @test_user.valid?, "Email #{email.inspect} should be invalid"
    end
  end

  test "it validates uniqueness of the email" do
    copied_user = @test_user.dup
    @test_user.save
    assert_not copied_user.valid?
  end

  test "it validates uniqueness of the email (case insensitive)" do
    copied_user = @test_user.dup
    @test_user.save
    assert_not copied_user.valid?
  end

  test "it downcases the email before saving" do
    mixed_case_email_address = "UpPeRcAsE@exam.com"
    @test_user.email = mixed_case_email_address
    @test_user.save
    @test_user.reload
    assert_equal @test_user.email, mixed_case_email_address.downcase
  end
end
