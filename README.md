# Datica.com Public Site

Seldon is a [Middleman](//middlemanapp.com) 4 static site app, [Contentful](contentful.com) for structured content parsed with [middleman-contentful](https://github.com/contentful/contentful_middleman). Node scripts handle CSS and JS bundling.

## TL;DR
- `$ git clone https://github.com/catalyzeio/seldon.git`
- `$ bundle install` (may require password, as with `sudo`)
- `$ npm i` _Note: currently, node up to v.8 only supported because of some old scripts._
- `$ middleman contentful` (Requires API key, managed with a dotenv, contact the [repo admin](https://github.com/allanwhite) if you need it)
- `$ middleman serve`
- `$ middleman build`
- Navigate to [localhost:3000](http://localhost:3000)!

### Ruby notes

Depending on your Ruby setup you may need to prepend `bundle exec` to your middleman commands. We prefer using [rvm](https://rvm.io/) and currently run Ruby 2.4.1. This version is pegged to what Netlify uses.

Because Middleman runs on ruby, you're going to want to make sure you have that setup and running at least version 2.3.x. The reason we need this version of ruby and not 2.0.x, which macOS ships with, is because we're using the latest version of middleman; `Middleman 4.x.x`. It's recommended you update Ruby with [homebrew](//brew.sh/) and not rvm. After you've installed Ruby with Homebrew, be sure you also have it linked `brew link ruby`.

## Setup

Once you have the correct version of Ruby running you can install middleman by doing the following:

`$ gem install middleman`

Pretty easy right? This now gives us the `middleman` command in our terminal, which we won't be using directly, but is required for several of our npm commands to work.

After middleman has been installed it's time to install the rest of the required gems. Navigate to the root directory of this repo and run:

`$ bundle install`

This will install all of our required gems. Hopefully this command executes without issue. However if you do run in to a problem stackoverflow usually has the solution.

Now that ruby, middleman, and our required gems are installed we can move forward to installing our [npm](npmjs.org) packages. In order for npm to work we'll first need node running on our machine. One of the better package managers for node is [`n`](//github.com/tj/n). If you do not have at least node v6.x.x running you should install `n` and switch to using the correct version. Once you have the correct version of node we can navigate to the root directory of this repo and run:

`$ npm i`

This will install all of our npm packages into a folder called `node_modules`. These are required dependencies of this project. These are always local to a developer's machine and should never be committed into git.

Congratulations. You're done installing things.

## Commands

There are only three commands you'll need to deal with (you'll usually want to run these as `bundle exec middleman {{command}}`):
- `contentful`
- `serve`
- `build`
- `contentful --rebuild` will execute both contentful, and if there's new data files, initiate the `build` command.

**contentful:**
Invoking `contentful` will pull down the latest data from Contentful, and populate them with local yaml files in `/data/site/`. It's important to do this when you start work on the app.

**serve:**
This command extends the built in `middleman serve` command by way of a gulp proxy. This gives us an available and auto-updating web server located at [http://localhost:3000](http://localhost:3000).

**build:**
This last command builds the site in a production state in the `/build` directory.

## Up and running
As outlined above, we can use the `start` command to execute basic commands. Getting the site up and running is as easy as:

`$ bundle exec middleman contentful`
`$ bundle exec middleman serve`

## Serving and Building Guide Pages
In order for the guide pages to be built, append `DATICA_ENVIRONMENT=development;` to whatever command you want to run.
