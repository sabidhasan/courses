module ApplicationHelper
  def full_title(page:)
    base_title = "Rails Tutorial"

    page.empty? ? base_title : "#{page} | #{base_title}"
  end
end
