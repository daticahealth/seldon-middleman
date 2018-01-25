sorted_posts = data.site.pressReleases.to_a.sort_by{ |id, post| post['pub_date'] }.reverse!

xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
    site_url = "https://datica.com/press-release/"
    xml.title "Datica Health Press Releases"
    xml.id "https://datica.com/press/"
    xml.subtitle "Thoughts from the team behind Healthcare's trusted cloud"
    # xml.link "href" => site_url
    xml.link "href" => site_url, "rel" => "self"
    xml.author { xml.name "Datica Health, Inc." }
    xml.icon "https://datica.com/favicon.ico"
    xml.logo "https://images.contentful.com/189dvqdsjh46/4SwayIJ5AcCe4iCU820mQs/504b8e57eacc0d81032d01ace96bc622/datica_logo__black.png?w=150"
    sorted_posts.take(1).each do | id, post |
        xml.updated post['pub_date'].to_time.iso8601
    end
    sorted_posts[0...10].each do | id, post |
        xml.entry do
            xml.title post["title"]
            xml.link "rel" => "alternate", "href" => site_url + post["slug"]
            xml.id site_url + post["slug"]
            xml.published post['pub_date'].to_time.iso8601
            xml.updated post['pub_date'].to_time.iso8601
            xml.author { xml.name post["author"]["fullname"] }
            xml.summary Kramdown::Document.new(post["summary"]).to_html, "type" => "html"
            xml.content Kramdown::Document.new(post["post"]).to_html, "type" => "html"
        end
    end
end
