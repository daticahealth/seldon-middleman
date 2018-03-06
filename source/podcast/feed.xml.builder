sorted_podcasts = data.site.podcast.to_a.sort_by{ |id, podcast| podcast['pub_date'] }.reverse!

companyname = "Datica Health, Inc."
xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
    site_url = "https://datica.com/podcast/"
    xml.title "Healthcare Innovators Podcast by Datica"
    xml.id "https://datica.com/podcast/"
    xml.subtitle "Thoughts from the team behind Healthcare's trusted cloud"
    # xml.link "href" => site_url
    xml.link "href" => site_url, "rel" => "self"
    xml.author { xml.name companyname }
    xml.icon "https://datica.com/favicon.ico"
    xml.logo "https://images.contentful.com/189dvqdsjh46/4SwayIJ5AcCe4iCU820mQs/504b8e57eacc0d81032d01ace96bc622/datica_logo__black.png?w=150"
    sorted_podcasts.take(1).each do | id, podcast |
        xml.updated podcast['pub_date'].to_time.iso8601
    end
    sorted_podcasts[0...10].each do | id, podcast |
        if podcast.has_key?("author")
            the_author = podcast["author"]["fullname"]
        else
            the_author = companyname
        end
        xml.entry do
            xml.title podcast["title"]
            xml.link "rel" => "alternate", "href" => site_url + podcast["slug"]
            xml.id site_url + podcast["slug"]
            xml.published podcast['pub_date'].to_time.iso8601
            xml.updated podcast['pub_date'].to_time.iso8601
            xml.author { xml.name the_author }
            xml.summary Kramdown::Document.new(podcast["summary"]).to_html, "type" => "html"
            xml.content Kramdown::Document.new(podcast["post"]).to_html, "type" => "html"
        end
    end
end
