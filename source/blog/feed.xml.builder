sorted_posts = data.site.blog.to_a.sort_by{ |id, post| post['pub_date'] }.reverse!

xml.instruct! :xml, :version => '1.0', :encoding => 'UTF-8'
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
    site_url = "https://datica.com/blog/"
    xml.title "Datica Company Blog"
    xml.id "https://datica.com/blog/"
    xml.subtitle "Thoughts from the team behind Healthcare's trusted cloud"
    xml.tag!("link", "rel" => "alternate", "href" => site_url, "type" => "text/html") 
    xml.tag!("link", "rel" => "self", "href" => site_url + "feed.xml", "type" => "application/atom+xml") 
    xml.author { xml.name "Datica Health, Inc." }
    xml.icon site_icon + "&amp;w=48&amp;h=48"
    xml.logo "https://images.contentful.com/189dvqdsjh46/4SwayIJ5AcCe4iCU820mQs/504b8e57eacc0d81032d01ace96bc622/datica_logo__black.png?w=150"
    sorted_posts.take(1).each do | id, post |
        xml.updated post['pub_date'].to_time.iso8601
    end
    sorted_posts[0...20].each do | id, post |
        xml.entry do
            xml.title post["title"]
            xml.link "rel" => "alternate", "href" => site_url + post["slug"]
            xml.id site_url + post["slug"]
            xml.published post['pub_date'].to_time.iso8601
            xml.updated post['pub_date'].to_time.iso8601
            xml.author { xml.name post["author"]["fullname"] }
            xml.summary safe_summary(post.summary)
            if post.has_key?("featured_image")
                post_image = '<img src="' + post.featured_image.url + image_featured_small + '" width="420" alt="' + post.title + '">'
            else
                post_image = nil
            end
            # if post.has_key?("cta_ref")
            #     post_cta = '<h3>Next: <a href="' + post.cta_ref.cta_url + '">' + post.cta_ref.cta_title + '</a></h3>'
            # else
            #     post_cta = nil
            # end
            post_all = post_image + Kramdown::Document.new(post["blog_lead"]).to_html + Kramdown::Document.new(post["post"]).to_html + '<p><a href="' + site_url + post.slug + '"> Continue reading, &quot;' + post.title + '&quot;</a></p>'
            xml.tag!("content", "type" => "html") { xml.cdata!(post_all) }
        end
    end
end
# xml.tag!("g:id") { xml.cdata!("sdaf") }
# xml.itunes :summary { xml.text! "The best damn thing ever." }
# <atom:link href="http://dallas.example.com/rss.xml" rel="self" type="application/rss+xml" />
# <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">