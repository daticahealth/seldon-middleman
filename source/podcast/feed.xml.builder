sorted_podcasts = data.site.podcast.to_a.sort_by{ |id, post| post['pub_date'] }.reverse!

companyname = "Datica Health, Inc."
xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
    site_url = "https://datica.com/podcast/"
    xml.title "Healthcare Innovators Podcast by Datica"
    xml.id "https://datica.com/podcast/"
    xml.subtitle "Thoughts from the team behind Healthcare's trusted cloud"
    xml.tag!("link", "rel" => "alternate", "href" => site_url, "type" => "text/html") 
    xml.tag!("link", "rel" => "self", "href" => site_url + "feed.xml", "type" => "application/atom+xml") 
    xml.author { xml.name companyname }
    xml.icon site_icon + "?w=48"
    xml.logo "https://images.ctfassets.net/189dvqdsjh46/3jh3mHm796s8WqE6EQkCUk/8603a326f5c5ec0b8dbc1a2cb97b2c10/podcast-art-square-sm.png?w=150"
    sorted_podcasts.take(1).each do | id, post |
        xml.updated post['pub_date'].to_time.iso8601
    end
    sorted_podcasts[0...10].each do | id, post |
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
            xml.contributor { xml.name post.guest.fullname }
            xml.summary safe_summary(post.summary)
            if post.has_key?("guest")
                post_image = '<img src="' + post.guest.profile_pic.url + image_thumb + '" width="100" alt="' + post.title + '" style="float: right; margin-left: 5px; border-radius: 1000px;">'
            else
                post_image = nil
            end
            post_all = post_image + Kramdown::Document.new(post["post"]).to_html + '<p><em>Subscribe to the Healthcare Innovators Podcast</em></p><p><a href="https://itunes.apple.com/us/podcast/healthcare-innovators-podcast/id1118068234" title="Subscribe in iTunes"> <img class="logo-basic" src="//images.ctfassets.net/189dvqdsjh46/it9jQssFYOsG2G8UmaMKA/6c5755139dde05f5d3655d9db0635cc8/logo-itunes.png" alt="subscribe"> </a> <a href="https://soundcloud.com/catalyze-io" title="Listen in soundcloud"> <img class="logo-basic" src="//images.ctfassets.net/189dvqdsjh46/5OJKDhxQsMKsW2gcSKAyOE/a0f87e4b72c180f64bf24347950cf98e/logo-soundcloud.png" alt="subscribe"> </a> <a href="http://www.stitcher.com/s?fid=91339&amp;refid=stpr" title="Subscribe with Stitcher"> <img class="logo-basic" src="//images.ctfassets.net/189dvqdsjh46/4zPUHPDjrGMa4UCKmso8ss/ec71cdd18e29639d0dd3f1858530b4af/logo-stitcher.png" alt="subscribe"> </a> <a href="https://goo.gl/app/playmusic?ibi=com.google.PlayMusic&amp;isi=691797987&amp;ius=googleplaymusic&amp;link=https://play.google.com/music/m/Ivinlhscpcxt4ovbaqla72swlru?t%3DHealthcare_Innovators_Podcast" title="Google Play"> <img class="logo-basic" src="//images.ctfassets.net/189dvqdsjh46/2oUStfC3QEm4uSouyK4M6Y/5273b9289e3d993ceb93ae97c23c8af0/logo-googleplay.png" alt="subscribe"> </a> </p>'
            xml.tag!("content", "type" => "html") { xml.cdata!(post_all) }
        end
    end
end
