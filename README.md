# Seldon

![seldon](https://s31.postimg.org/vno38fxnf/seldon.png)

Welcome to Seldon! We're building a cutting-edge app that blends the best of static-site generators with the best of content-management systems. Seldon is comprised of three primary components: Core, Content, and Deployment. Below we discuss each component in depth.

## TL;DR
- `$ git clone https://github.com/catalyzeio/seldon.git`
- `$ bundle install` (may require password, as with `sudo`)
- `$ npm i`
- `$ npm run content`
- `$ middleman serve`
- `$ middleman build`

**Note:** depending on your Ruby setup you may need to prepend `bundle exec` to your middleman commands.

Navigate to [http://localhost:3000](http://localhost:3000)!

## Development Server
The development server is located at [development.datica.com](http://development.datica.com). When we merge code changes into development, [CodeShip](https://codeship.com/) fires off an automatic build. This way we always have a place where we can see the latest changes to `development`.

## Introduction
While we loved Kirby CMS, we just never used many of the excellent features it provided — we didn't use the control panel at all. Because of our need for hand-crafted pages and experiences, the limitations of a control-panel based CMS with relatively fixed data models were just not used as much.

To move beyond this paradigm, we've focused on optimizing for our particular needs and team skill sets. We've reduced it to three components: Core, Content, and Deploy.

#### Core
We had first considered scoping the entire site to just the build system. An example of this would be using tools like Gulp or Webpack to compile, translate, and deliver all content including public and static assets. This seemed like a great idea at first, and for certain sites this is a great option. However for us it seemed like too much configuration and building. We needed things to work right out of the box.

What we landed on was keeping this logical separation of concerns by pushing static compilation and translation to a build system, while at the same time keeping a static site generator around as the management system to provide things like blogging, tagging, collecting, and templating.

#### Content
Furthermore, to position ourselves for future growth as a company and exploit other opportunities, we opted to fold in a content-first content API for more structured sections like blogs and documentation.

#### Deploy
These approaches will give us the best of all worlds: complete, custom control for web craftsmen and perfectly tailored web experiences, and easy publishing and content management for structured content with an API-first CMS.

Beyond content configuration we're taking advantage of a modern continuous integration tool that allows for extensive tests and auto deployments.

## Technology
From a high level, Seldon is comprised of [Middleman](//middlemanapp.com) and [npm](//www.npmjs.com/). We manage dependencies, run the local web server and compile assets with npm. Everything else is driven through the Middleman config.

Currently we are using [Contentful](contentful.com) for structured content, and parsing it with a very handy [Middleman extension](https://github.com/contentful/contentful_middleman). Developers run a command to pull down updated content, which populates the local `data` folder with structured Yaml data files.

## Setup
Because Middleman runs on ruby, you're going to want to make sure you have that setup and running at least version 2.3.x. The reason we need this version of ruby and not 2.0.x, which macOS ships with, is because we're using the latest version of middleman; `Middleman 4.x.x`. It's recommended you update Ruby with [homebrew](//brew.sh/) and not rvm. After you've installed Ruby with Homebrew, be sure you also have it linked `brew link ruby`.

_Note_ - I currently run ruby with `rvm`, and use version `2.4.1p111`, which works great locally. - AW

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
In order for the guide pages to be built, append `DATICA_ENVIRONMENT=development;` to whatever command you want to run
