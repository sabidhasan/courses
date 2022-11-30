class User < ApplicationRecord
  validates :name, length: { maximum: 50, minimum: 1 }
  validates :email, length: { maximum: 128, minimum: 1 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates_uniqueness_of :email

  before_save :conform_email_case

  def conform_email_case
    self.email.downcase!
  end
end
