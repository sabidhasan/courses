module ApplicationHelper
  def full_title(page:)
    base_title = "Rails Tutorial"

    (page.nil? || page.empty?) ? base_title : "#{page} | #{base_title}"
  end
end
