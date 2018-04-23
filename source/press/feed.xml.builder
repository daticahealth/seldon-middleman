sorted_posts = data.site.pressReleases.to_a.sort_by{ |id, post| post['pub_date'] }.reverse!
companyname = "Datica Health, Inc."
xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
    site_url = "https://datica.com/press/"
    xml.title "Datica Health Press Releases"
    xml.id site_url
    xml.subtitle "Datica Health Press Releases and Media Coverage"
    xml.tag!("link", "rel" => "alternate", "href" => site_url, "type" => "text/html") 
    xml.tag!("link", "rel" => "self", "href" => site_url + "feed.xml", "type" => "application/atom+xml") 
    xml.author { xml.name companyname }
    xml.icon site_icon + "?w=48"
    xml.logo "https://images.contentful.com/189dvqdsjh46/4SwayIJ5AcCe4iCU820mQs/504b8e57eacc0d81032d01ace96bc622/datica_logo__black.png?w=150"
    sorted_posts.take(1).each do | id, post |
        xml.updated post['pub_date'].to_time.iso8601
    end
    sorted_posts[0...20].each do | id, post |
        if post.has_key?("author")
            the_author = post["author"]["fullname"]
        else
            the_author = companyname
        end
        xml.entry do
            xml.title post["title"]
            xml.link "rel" => "alternate", "href" => site_url + post["slug"]
            xml.id site_url + post["slug"]
            xml.published post['pub_date'].to_time.iso8601
            xml.updated post['pub_date'].to_time.iso8601
            xml.author { xml.name the_author }
            xml.summary safe_summary(post.summary)
            post_all = Kramdown::Document.new(post["post"]).to_html
            xml.tag!("content", "type" => "html") { xml.cdata!(post_all) }
        end
    end
end
