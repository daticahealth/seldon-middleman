
# Helpers & global variables
module SiteHelpers
    def site_url
        return ENV["DATICA_SITE_URL"] ? ENV["DATICA_SITE_URL"] : "https://datica.com"
    end
    def site_icon # append &w=n&h=n where n is dimensions in pixels. This one is black btw.
        'https://images.ctfassets.net/189dvqdsjh46/32chySeS5qMcCWeAwEyCQM/cf6c8d516896bc66f0c67d142869360a/datica-icon-256.png'
    end
    # def contentful_space
    #     return ENV["DATICA_CF_SPACE"] ? ENV["DATICA_CF_SPACE"] : contentful_space_local
    # end
    # def contentful_token
    #     return ENV["DATICA_CF_TOKEN"] ? ENV["DATICA_CF_TOKEN"] : contentful_token_local
    # end
    def twitter_handle
        "@daticahealth"
    end
    def company_phone
        "+1-888-377-3184"
    end
    # responsive image strings for contentful images https://www.contentful.com/blog/2014/08/14/do-more-with-images-on-contentful-platform/
    def image_thumb
        # add q=[30-50] after; don't forget to set width & height for retina images
        '?fit=thumb&f=face&w=300&h=300'
    end
    def image_featured_small
        # add q=[30-50] after; don't forget to set width & height for retina images
        '?fit=crop&w=840&h=420&fm=jpg&q=40'
    end
    def image_featured_medium
        '?fit=thumb&w=1200&h=500&fm=jpg&q=60'
    end
    def image_featured_large
        '?fit=thumb&w=2200&h=800&fm=jpg&q=60'
    end
    def image_size_small
        '?w=640'
    end
    def image_size_medium
        '?w=1200'
    end
    # For sharing metadata - if no key image on the page, fall back to this.
    def image_share_default
        "https://images.ctfassets.net/189dvqdsjh46/3IyRP3gK64W4MaqMwWmSgU/d2c4ee3f02cbceda200b8b444fd67f26/cta-generic.jpg" + image_size_small
    end
    def image_share_platform # get ID from CF
        "https://images.ctfassets.net/189dvqdsjh46/2aPhdyH76MiQwqQq4KiGMg/186518b5a3896994d54ae3cef4fbac8d/cta-compliance-share.jpg" + image_size_small
    end
    def cf_asset_protocol
        'https:'
    end
    def daticon(path, *p)
        File.open('source/assets/icons/'+path+'.svg', "r").read
    end
    def daticavg(path, *p)
        File.open('source/assets/img/'+path+'.svg', "r").read
    end
    def person_widget(slug)
        person = data.site.person.to_a.find { |p| p[1]['slug'] == slug }
        partial("partials/snippets/person", :locals => { :p => person[1] })
    end
    # The idea here is to display a quote based on customer.slug.
    # def customer_quote(slug)
        # quote = data.site.quotes.to_a.find { |p| p[1]['customer']['slug'] == slug }
        # p["quote_body"]
        # partial("partials/snippets/quote", :locals => { :p => quote[1] })
    # end
    def case_card(customer)
        card = data.site.caseStudy.to_a.find { |p| p[1]['customer'] == customer }
        partial("partials/snippets/card_customer", :locals => { :p => card[1] })
    end
    def get_previous_item(items, current_item, sort_by_key, reverse=false)
        if !items.kind_of?(Array)
            items = items.to_a
        end
        sorted = items.sort_by! { |id, i| i[sort_by_key] }
        if reverse == true
            sorted = sorted.reverse!
        end
        current_index = sorted.index([current_item['id'], current_item])
        previous_item = nil
        if current_index != nil && current_index > 0
            previous_item = sorted.fetch(current_index-1)[1]
        end
        return previous_item
    end
    def get_next_item(items, current_item, sort_by_key, reverse=false)
        if !items.kind_of?(Array)
            items = items.to_a
        end
        sorted = items.to_a.sort_by! { |id, i| i[sort_by_key] }
        if reverse == true
            sorted = sorted.reverse!
        end
        current_index = sorted.index([current_item['id'], current_item])
        next_item = nil
        if current_index != nil && current_index < sorted.length-1
            next_item = sorted.fetch(current_index+1)[1]
        end
        return next_item
    end

    def get_cf_item_by_key(items, key_value, key_name)
        #TODO do this without the to_a
        ary = items.to_a

        key_name = key_name.split(".")

        ret_val = nil
        ary.each do |id, item|
            check_item = nil
            #copy key_name
            cur_key_name = key_name
            #Make sure there's at least one thing
            if cur_key_name.length > 0
                check_item = item[cur_key_name[0]]
                cur_key_name = cur_key_name.drop(1)
                if cur_key_name.length > 0
                    cur_key_name.each do |key|
                        check_item = check_item[key]
                    end
                end
            end
            if check_item == key_value
                ret_val = item
            end
        end
        return ret_val
    end
    def get_tag_list(tags)
        tag_stringArray = Array.new
        tags.each do |tag|
            if tag.has_key?('tag_full')
                tag_stringArray.push(tag['tag_full'])
            end
        end
        return tag_stringArray.join(', ')
    end
    # Converts any markdown first to html, then strips tags
    def plain_text(item)
        source_text = Kramdown::Document.new(item).to_html
        return strip_tags(source_text)
    end
    # Converts any markdown first to html, then strips tags, then truncates approx 160 chr
    def safe_summary(item)
        source_text = Kramdown::Document.new(item).to_html
        return truncate_words(strip_tags(source_text), :length => 45)
    end
    # some common SVG sprites
    def icon_permalink
        '<svg class="icon icon-size--small" viewBox="0 0 37 34" width="37" height="34"><use xlink:href="/public/icons/util-icons-sprite.svg#icon-links"></use></svg>'
    end
    def icon_tag
        '<svg class="icon icon-size--small" width="27" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32"><use xlink:href="/public/icons/util-icons-sprite.svg#icon-tag"></use></svg>'
    end
    # product backgrounds, light & dark
    def bg_product_light 
        "https://images.ctfassets.net/189dvqdsjh46/50WC8N3lz2k0K4o0WQYE4A/96d25d0d7f385f8cfc82950e78285a8a/hex-pattern-light-bg.svg"
    end
    def bg_product_dark 
        "https://images.ctfassets.net/189dvqdsjh46/6OKt8JnNqo86wQIgOqiGcs/232794aa517af9870472dd34726ef595/hex-pattern-dark-bg.svg"
    end
end
