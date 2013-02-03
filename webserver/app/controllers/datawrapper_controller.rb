class DatawrapperController < ApplicationController

	# GET
	def alldata
		apikey = 	"ac889422c02d446383ac5fffcebf5665"
		puts '################# alldata #####################'

		contributor_ft = params['contributor_ft']
		year = params['year']

		page = parsePage
		url = "http://transparencydata.com/api/1.0/contributions.json?apikey=" + apikey + "&seat=state:governor|state:upper|state:lower|federal:senate|federal:house|federal:president&per_page=100&page=" + page		
		
		if !contributor_ft.nil?
			url += '&contributor_ft=' + contributor_ft
		end

		if !year.nil? 
			url += '&date=><|' + year + '-01-01|' + year + '-12-31' 
		else 
			#default date is 2012.
			url += '&date=><|2012-01-01|2012-12-31'
		end
		puts url
		query_api(url, page)
	end


	# GET
	def companynames
			apikey = 	"ac889422c02d446383ac5fffcebf5665"
			puts '################# companynames #####################'
			page = parsePage
			url = "http://transparencydata.com/api/1.0/entities/list.json?apikey=" + apikey + "&start=0&end=100&type=organization&page=" + page		
			query_api(url, page)
	end


	def parsePage
		page = params['page']
		if !page.nil?
			puts 'page is ' + page
		else
			page = '1'
		end	
		return page
	end

	def query_api(url, page)
			require 'net/http'
			uri = URI.parse(URI.encode(url.strip))
			@result = Net::HTTP.get_response(uri)
	    respond_to do |format|
	      format.json { render json: @result.body }
	      format.js { render @result.body }
	    end
	end

end #ends class
