

function test2()
{
var district_data = [{"seat": "federal:house", "committee_ext_id": "", "seat_held": "federal:house", "recipient_party": "R", "transaction_type_description": "Contribution Made to Non-Affiliated", "recipient_type": "P", "seat_status": "I", "recipient_state": "MO", "contributor_category": "C5140", "contributor_gender": "", "contributor_state": "", "recipient_category": "", "is_amendment": false, "district": "MO-06", "organization_name": "Google Inc", "recipient_ext_id": "N00013323", "parent_organization_name": "", "contributor_address": "", "transaction_id": "pac2cand:2012:4081320121160826611", "contributor_occupation": "", "filing_id": "", "contributor_city": "", "recipient_state_held": "MO", "district_held": "MO-06", "recipient_name": "Sam Graves (R)", "organization_ext_id": "C00428623", "contributor_zipcode": "", "transaction_namespace": "urn:fec:transaction", "date": "2012-06-29", "committee_name": "", "candidacy_status": false, "parent_organization_ext_id": "", "cycle": 2012, "contributor_name": "Google Inc", "contributor_type": "C", "contributor_employer": "", "seat_result": "W", "transaction_type": "24k", "amount": "5000.00", "contributor_ext_id": "C00428623", "committee_party": ""}];

var result_json = [];
var dict = {};
$.each(district_data, function(key, data){
if(data.seat == "federal:house")
{
	var temp = dict[data.district.toString()];
	if(typeof(temp) != 'undefined')
	{
		if(data.recipient_party == "R")
		{
			var temp_amount = parseInt(data.amount, 10) + parseInt(temp.repub_don, 10);
			alert("tempamount: " + temp_amount + "\n" +
				"district: " + data.district.toString() + 
				"repub_do: " + temp_amount.toString() +
				"dem_don" + temp.dem_don.toString());

			dict[data.district] = "{\"district\": " + data.district.toString() + "," +
				"\"repub_do\": " + temp_amount.toString() + "," +
				"\"dem_don\": " + temp.dem_don.toString() + "}";
		}
		else if(data.recipient_part == "D")
		{
			var temp_amount = parseInt(data.amount, 10) + parseInt(temp.dem_don, 10);

			alert("tempamount: " + temp_amount + "\n" +
				"district: " + data.district.toString() + 
				"repub_do: " + temp.repub_don.toString() +
				"dem_don" + temp_amount.toString());

			dict[data.district] = "{\"district\": " + data.district.toString() + "," +
				"\"repub_don\": " + temp.repub_don.toString() + "," +
				"\"dem_don\": " + temp_amount.toString() + "}";
		}
	}
	else
	{
		if(data.recipient_party == "R")
		{
			alert("repub data amount: " + data.amount.toString() + "\n" +
				"district: " + data.district.toString() + 
				"dem_don: " + "0");

			dict[data.district.toString()] = "{\"district\": " + data.district.toString() + "," +
				"\"repub_don\": " + data.amount.toString() + "," + 
				"\"dem_don\": \"0\"}";
				//alert("Dict length: " + dict.length);
		}
		else if(data.recipient_part == "D")
		{
			alert("dem data amount: " + data.amount.toString() + "\n" +
				"district: " + data.district.toString() + 
				"repub_don: " + "0");

			dict[data.district.toString()] = "{\"district\": " + data.district.toString() + "," +
				"\"repub_don\": \"0\"," +
				"\"dem_don\": " + data.amount.toString() + "}";
				//alert("Dict length: " + dict.length);
		}
	}
}
DumpDict(dict);

});


}

function DumpDict(dict)
{
	var s = "";
	for(var p in dict)
	{
		s = "top: " + p + "\n";
		for(var t in p)
		{
			s += "bottom: " + t;
			s += "tlength: " + t.length;
		}
	}

	alert(s);
	alert("end");

/*	var x = {};
	x["this"] = "that";
	alert("testarray: " + x['this']);*/
}