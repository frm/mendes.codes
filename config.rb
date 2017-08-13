require "slim"
Slim::Engine.disable_option_validator!

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false
page "/", layout: "landing"

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :images_dir, "images"
set :partials_dir, "partials"

activate :directory_indexes

# Build-specific configuration
configure :build do
  activate :minify_css
  # activate :imageoptim do |options|
  #   options.pngout = false
  # end

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"

  # github.com/yterajima/middleman-robots
  # Make sure this stays on the bottom
  activate :robots,
    rules: [
      { user_agent: "*", allow: ["/"] },
    ],
    sitemap: "#{data.site.url}/sitemap.xml"
end
