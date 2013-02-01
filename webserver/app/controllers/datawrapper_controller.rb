class DatawrapperController < ApplicationController
	
	# GET
	def alldata
		puts '################# onyong #####################'
		require 'net/http'

		url = "http://transparencydata.com/api/1.0/contributions.json?apikey=ac889422c02d446383ac5fffcebf5665&contributor_state=ak&date=><|2002-09-01|2002-12-31&seat=state:upper|state:lower"
		uri = URI.parse(URI.encode(url.strip))
		puts 'uri: ' + uri.to_s
		puts 'uri.path: ' + uri.path
		puts 'uri.port: ' + uri.port.to_s
		puts 'uri.query: ' + uri.query

		@result = Net::HTTP.get_response(uri)

    respond_to do |format|
      format.json { render json: @result.body }
      format.js { render result.body }
    end

	end
end
