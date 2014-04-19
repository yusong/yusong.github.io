# include the MD5 gem, this should be part of a standard ruby install
require 'digest/md5'

module Jekyll

	class Gravatar < Liquid::Tag

                def initialize(tag_name, size, token)
                  super
                  @size = size.strip
                end

		def render(context)
			# get the site config variables
			site_config = context.registers[:site].config

			# get the email address from the site config
			email_address = site_config['gravatar_email']
			# change the email address to all lowercase
			email_address = email_address.downcase

			# create an md5 hash from the email address
			gravatar_hash = Digest::MD5.hexdigest(email_address)

			# compile the full Gravatar URL
			# image_src = "http://www.gravatar.com/avatar/#{gravatar_hash}"
			image_src = "http://www.gravatar.com/avatar/5c9b0137bbd0719288f0e83985da0e6a"
			
                        # append size query to URL if provided in tag
                        unless @size.empty?
                          image_src = image_src+"?s=#{@size}"
                        end
			
			# output the full Gravatar URL
			image_src
		end

	end
	
end

# register the "gravatar_image" tag
Liquid::Template.register_tag('gravatar_image', Jekyll::Gravatar)
