require "middleman-gh-pages"

require "rubocop/rake_task"

task default: %w[lint:all]

namespace :lint do
  desc "Run all linters"
  task all: %i[rubocop]

  RuboCop::RakeTask.new
end
