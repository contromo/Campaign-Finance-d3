class DatawrapperController < ApplicationController
	
	# GET
	def alldata
		puts '################# onyong #####################'
		page = params['page']

		if !page.nil?
			puts 'page is ' + page
		else
			page = 1
		end
		
		require 'net/http'

		url = "http://transparencydata.com/api/1.0/contributions.json?apikey=ac889422c02d446383ac5fffcebf5665&date=><|2002-09-01|2002-12-31&seat=state:upper|state:lower&per_page=100000&page=" + page
		uri = URI.parse(URI.encode(url.strip))

		@result = Net::HTTP.get_response(uri)

	    respond_to do |format|
	      format.json { render json: @result.body }
	      format.js { render @result.body }
	    end

	end
end


