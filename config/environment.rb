# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true

# Rails.application.routes.default_url_options = {
#     host: 'localhost',
#     port: 3000
#   }
