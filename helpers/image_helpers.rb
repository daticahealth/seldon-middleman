# Middleman - Inline SVG Helper
# ------------------------------------------------------------------------------
# 1. Save this file at `[project_root]/helpers/image_helpers.rb`
# 2. Restart your local Middleman server if it's running
# 3. Embed SVG files into your template files like so:
#
#      <%= inline_svg("name/of/file.svg") %>
#
#    The helper also allows for CSS classes to be added:
#
#      <%= inline_svg("name/of/file.svg", class: "my-addl-class") %>
#
# /image_helpers.rb
module ImageHelpers
  # usage <%= inline_svg("logo"); %> assuming logo.svg is stored at source/assets/icons/inlined/logo.svg
  def inline_svg(filename, options = {})
    asset = "source/assets/icons/inlined/#{filename}.svg"
    if File.exists?(asset)
      file = File.open(asset, 'r') { |f| f.read }
      css_class = options[:class]
      aspect_ratio = options[:preserveAspectRatio]
      # this could be passed via helper, right now this default covers most of our svg use cases.
      radio_default = "xMidYMid meet"
      return file if css_class.nil?
      document = Oga.parse_xml(file)
      svg      = document.css('svg').first
      svg.set(:class, css_class)
      # svg.set(:preserveAspectRatio, radio_default)
      document.to_xml
    else
      puts "inline_svg '#{asset}' at #{current_page.url} could not be found!"
      %(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60"
          width="400px" height="60px"
        >
          <text font-size="12" x="8" y="20" fill="#cc0000">
            Error: '#{asset}' could not be found.
          </text>
          <rect
            x="1" y="1" width="398" height="38" fill="none"
            stroke-width="1" stroke="#cc0000"
          />
        </svg>
      )
    end
  end
  # UGH can't figure out how to just pass a path or type flag to the above, so, separate helper. >=[
  def inline_svg_art(filename, options = {})
    asset = filename
    if File.exists?(asset)
      file = File.open(asset, 'r') { |f| f.read }
      css_class = options[:class]
      aspect_ratio = options[:preserveAspectRatio]
      radio_default = "xMidYMid meet"
      return file if css_class.nil?
      document = Oga.parse_xml(file)
      svg      = document.css('svg').first
      svg.set(:class, css_class)
      # svg.set(:preserveAspectRatio, radio_default)
      document.to_xml
    else
      puts "inline_svg_art '#{asset}' at #{current_page.url} could not be found!"
      %(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60"
          width="400px" height="60px"
        >
          <text font-size="12" x="8" y="20" fill="#cc0000">
            Error: '#{asset}' could not be found.
          </text>
          <rect
            x="1" y="1" width="398" height="38" fill="none"
            stroke-width="1" stroke="#cc0000"
          />
        </svg>
      )
    end
  end
end

