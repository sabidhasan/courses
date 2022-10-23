# README

This is the sample application for a micropost-like website that is generated by
following the Rails Tutorial and book by Michael Hartl.

## License
See the license for the Rails Tutorial. TL;DR: MIT license.

## Getting Started
Make sure that Ruby is installed locally (FWIW I used `rvm` for managing Ruby versions),
at the version specified in the `Gemfile`. Rails should also be installed (`gem install rails`).

Install other dependencies needed by this project:

```
$ bundle install
```

Next, add database migrations. This project uses SQLite, so no need to have a separate
database running.

```
$ bin/rails db:migrate
```

To run tests

```
$ bin/rails test
```

To run locally:

```
$ bin/rails server
```