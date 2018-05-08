require 'slim'
# Required for sitemap
require 'builder'
require "helpers/image_helpers"
require "helpers/aria_current"
# require 'helpers/site_keys'
require 'helpers/site_helpers'
helpers SiteHelpers
# helpers SiteKeys
helpers ImageHelpers
# helpers AriaCurrent

Time.zone = 'UTC'

# Files with no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Custom layout files
page '/seldon/*', :layout => 'seldon-guide'

# No layout
page "/blog/feed.xml", :layout => false
page '/sitemap.xml', :layout => false
page '/robots.txt', :layout => false
page '/google8c054d702c2044e4.html', :layout => false

# Define where the assets go
config[:css_dir] = 'public/css'
config[:js_dir] = 'public/js'
config[:images_dir] = 'public/img'

# External pipeline
if build? || server?
    activate :external_pipeline,
        name: :node,
        command: build? ? 'npm run build' : 'npm run serve',
        source: '.tmp',
        latency: 1
end

# Activate pretty URLs
activate :directory_indexes

# enable aria-current on current-page links https://github.com/thoughtbot/middleman-aria_current
# activate :aria_current

# Ignore for pretty URLs
page '/google8c054d702c2044e4.html', :directory_index => false

# Build-specific configuration
configure :build do
    # ignore 'seldon/*' unless ENV['DATICA_ENVIRONMENT'] == "development"
    # /assets/* folder itself must not be served up or created. Seems to output items to public okay. -AW
    ignore 'assets/*'
    ignore 'assets/icons/inlined/*'
    ignore 'contentful_templates/glossary.html.erb'
    config[:host] = 'https://datica.com'
    config[:host_label] = 'prod'
    # minify HTML
    activate :minify_html
    # activate :asset_hash, :exts => %w(.css) # Only hash for .css
    # set :build_dir, 'build/'
end
configure :production do
    config[:host] = 'https://datica.com'
    config[:host_label] = 'prod'
    set :build_dir, 'build/'
end

configure :development do
    config[:host] = 'https://datica.netlify.com'
    config[:host_label] = 'dev'
    set :build_dir, 'build/'
end

configure :test do
    config[:host] = 'http://localhost:3000'
    config[:host_label] = 'test'
    set :build_dir, '../datica-build'
end

configure :static do
    config[:host] = 'https://datica.com'
    config[:host_label] = 'static'
    set :build_dir, '../datica-build'
end
# Sitemap
set :url_root, 'https://datica.com'
activate :search_engine_sitemap, default_priority: 0.5, default_change_frequency: "weekly"

# All the contentful configs
if Dir.exist?(config.data_dir + "/site")
    if Dir.exist?(config.data_dir + "/site/academy")
        data.site.academy.each do |id, academy|
            proxy "/academy/#{academy[:slug]}/index.html", "/contentful_templates/academy.html", :locals => { :item => academy }, :ignore => true
        end
    else
        puts "\n\nAcademy data folder doesn't exist!\n"
    end
    if Dir.exist?(config.data_dir + "/site/blog")
        data.site.blog.each do |id, blog|
            proxy "/blog/#{blog[:slug]}/index.html", "/contentful_templates/blog.html", :locals => { :item => blog }, :ignore => true
        end
    else
        puts "\n\nBlog data folder doesn't exist!\n"
    end
    if Dir.exist?(config.data_dir + "/site/customers")
        data.site.customers.each do |id, customer|
            proxy "/customer/#{customer[:slug]}/index.html", "/contentful_templates/customer.html", :locals => { :item => customer }, :ignore => true
        end
    else
        puts "\n\ncustomers data folder doesn't exist!\n"
    end
    if Dir.exist?(config.data_dir + "/site/discover")
        data.site.discover.each do |id, discover|
            proxy "/discover/#{discover[:slug]}/index.html", "/contentful_templates/discover.html", :locals => { :item => discover }, :ignore => true
        end
    else
        puts "\n\nDiscover data folder doesn't exist!\n"
    end
    if Dir.exist?(config.data_dir + "/site/events")
        data.site.events.each do |id, event|
            proxy "/events/#{event[:slug]}/index.html", "/contentful_templates/event.html", :locals => { :item => event }, :ignore => true
        end
    else
        puts "\n\nevents data folder doesn't exist!\n"
    end
    if Dir.exist?(config.data_dir + "/site/person")
        data.site.person.each do |id, person|
            case person.person_type
                when "Datica Executives", "Datica VP", "Datica Directors", "Datica Alumni"
                    proxy "/about/#{person[:slug]}/index.html", "/contentful_templates/profile.html", :locals => { :item => person }, :ignore => true
                when "Datica Sales Team"
                    proxy "/contact/#{person[:slug]}/index.html", "/contentful_templates/profile.html", :locals => { :item => person }, :ignore => true
            end
        end
    else
        puts "\n\nperson data folder doesn't exist!\n"
    end

    if Dir.exist?(config.data_dir + "/site/guides")
        data.site.guides.each do |id, guide|
            proxy "/guide/#{guide[:slug]}/index.html", "/contentful_templates/guide.html", :locals => { :item => guide }, :ignore => true
        end
    else
        puts "\n\nguide data folder doesn't exist!\n"
    end

    if Dir.exist?(config.data_dir + "/site/pressReleases")
        data.site.pressReleases.each do |id, pressRelease|
            proxy "/press-release/#{pressRelease[:slug]}/index.html", "/contentful_templates/press_release.html", :locals => { :item => pressRelease }, :ignore => true
        end
    else
        puts "\n\npressReleases data folder doesn't exist!\n"
    end

    if Dir.exist?(config.data_dir + "/site/podcast")
        data.site.podcast.each do |id, podcast|
            proxy "/innovation/#{podcast[:slug]}/index.html", "/contentful_templates/podcast.html", :locals => { :item => podcast }, :ignore => true
        end
    else
        puts "\n\npodcast data folder doesn't exist!\n"
    end
    if Dir.exist?(config.data_dir + "/site/reports")
        data.site.reports.each do |id, report|
            proxy "/innovation/#{report[:slug]}/index.html", "/contentful_templates/report.html", :locals => { :item => report }, :ignore => true
        end
    else
        puts "\n\nreports data folder doesn't exist!\n"
    end
    if Dir.exist?(config.data_dir + "/site/whitepapers")
        data.site.whitepapers.each do |id, whitepaper|
            proxy "/whitepapers/#{whitepaper[:slug]}/index.html", "/contentful_templates/whitepaper.html", :locals => { :item => whitepaper }, :ignore => true
        end
    else
        puts "\n\nWhitepapers data folder doesn't exist!\n"
    end
else
    puts "\n\nDon't forget to pull content with, 'bundle exec middleman contentful'!\n"
end

# Contentful configuration  - **** note that site_keys.rb is required. Keep this file out of the repo. ****
# content type mapping: [localname]: '[contentfulContentTypeId]'
# these could map to url segments, take note. -AW
activate :contentful do |f|
    f.space = { site: '189dvqdsjh46'}
    f.access_token = '9abdf5de79abc1e1cdc2cf25f3280641fd845a2f3fd5bad8222d1b457f20ba2d'
    f.use_preview_api = false
    f.all_entries = true
    f.client_options = { max_include_resolution_depth: 2 }
    f.content_types = {
        academy: 'academy',
        blog: 'blog',
        cta: 'cta',
        caseStudy: 'caseStudy',
        customers: 'customers',
        discover: 'discover',
        events: 'events',
        features: 'features',
        featureCategories: 'featureCategories',
        forms: 'forms',
        guides: 'guides',
        leadershipGallery: 'leadershipGallery',
        person: 'person',
        podcast: 'podcastEntry',
        pressReleases: 'pressReleases',
        # products: 'products',
        reports: 'reports',
        services: 'services',
        spotlights: 'spotlights',
        quotes: 'quotes',
        tags: 'tags',
        whitepapers: 'whitepapers'
    }
end

# Clean up an HTML fragment using Sanitize's permissive but safe Relaxed config.
# This also sanitizes any CSS in `<style>` elements or `style` attributes.
# Sanitize.fragment(html, Sanitize::Config::RELAXED)
