class User < ApplicationRecord
  validates :name, length: { maximum: 50, minimum: 1 }
  validates :email, length: { maximum: 128, minimum: 1 }
end
