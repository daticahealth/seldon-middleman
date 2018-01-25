# Middleman - Components and other helpers
# ------------------------------------------------------------------------------
# 1. Save this file at `[project_root]/helpers/image_helpers.rb`
# 2. Restart your local Middleman server if it's running

# module buttonHelpers
#   def button(url: "/", label: "Click for more", button_classes: "button--primary", style: "dark", icon: "icon-angle-right", title: "Read more") 
#     if defined?(style) && style == "light"
#       svg_class = "icon-inline svg-color--black"
#     else
#       svg_class = "icon-inline svg-color--white"
#     end
#     %(
#       <a class="button #{button_classes}" data-expand-on-small="true" href="#{url}" title="#{title}">#{label}
#     )
#     inline_svg("small/" + icon, class: svg_class)
#     %(</a>)
#   end
# end