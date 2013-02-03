
function calcSumPerDistrict(pJsonData)
{
	console.log("calcSumerPerDistrict");
	//Example data. This should be discarded once the pJsonData variable is fed into this function

	var result_json = [];
	var mDict = {};

	$.each(pJsonData, function(key, data){
	if(data.seat == "federal:house")
	{
		if(data.district == null || data.district.toString() == "")
		{
			console.log("Iteration: " + key.toString() + " has a blank/null district");
		}
		else
		{
			var district = data.district.toString().replace("-","_");
			var amount_obj = data.amount;

			var temp = mDict[district];

			if(typeof(temp) != 'undefined')
			{
				if(data.recipient_party == "R")
				{
					var temp_amount = parseInt(amount_obj, 10) + parseInt(temp.repub_don, 10);
					mDict[district].repub_don = temp_amount;
				}
				else if(data.recipient_party == "D")
				{
					var temp_amount = parseInt(amount_obj, 10) + parseInt(temp.dem_don, 10);
					mDict[district].dem_don = temp_amount;
				}
				else
				{
					var temp_amount = parseInt(amount_obj, 10) + parseInt(temp.other_don, 10);
					mDict[district].other_don = temp_amount;
				}
			}
			else
			{
				if(data.recipient_party == "R")
				{
					var json = {};
					json.district = district;
					json.repub_don = amount_obj.toString();
					json.dem_don = 0;
					json.other_don = 0;

					mDict[district] = json;
				}
				else if(data.recipient_party == "D")
				{
					var json = {};
					json.district = district;
					json.repub_don = 0;
					json.dem_don = amount_obj.toString();
					json.other_don = 0;

					mDict[district] = json;
				}
				else
				{
					var json = {};
					json.district = district;
					json.repub_don = 0;
					json.dem_don = 0;
					json.other_don = amount_obj.toString();
					mDict[district] = json;
				}
			}
		}
	}

	});

	for(var p in mDict)
	{
		result_json.push(mDict[p]);
	}

	return result_json;

	// The inclusion of this function is only for debugging purposes.
	//DumpDict(mDict);

}


function calcSumPerState(pJsonData)
{
	console.log("calcSumPerState");
	//Example data. This should be discarded once the pJsonData variable is fed into this function

	var result_json = [];
	var mDict = {};

	$.each(pJsonData, function(key, data){
	if(data.seat == "federal:senate")
	{
		if(data.recipient_state == null || data.recipient_state.toString() == "")
		{
			console.log("Iteration: " + key.toString() + " has a blank/null state");
		}
		else
		{
			var state = data.recipient_state.toString();
			var amount_obj = data.amount;

			var temp = mDict[state];

			if(typeof(temp) != 'undefined')
			{
				if(data.recipient_party == "R")
				{
					var temp_amount = parseInt(amount_obj, 10) + parseInt(temp.repub_don, 10);
					mDict[state].repub_don = temp_amount;
				}
				else if(data.recipient_part == "D")
				{
					var temp_amount = parseInt(amount_obj, 10) + parseInt(temp.dem_don, 10);
					mDict[state].dem_don = temp_amount;
				}
				else
				{
					var temp_amount = parseInt(amount_obj, 10) + parseInt(temp.other_don, 10);
					mDict[state].other_don = temp_amount;
				}
			}
			else
			{
				if(data.recipient_party == "R")
				{
					var json = {};
					json.state = state;
					json.repub_don = amount_obj.toString();
					json.dem_don = 0;
					json.other_don = 0;

					mDict[state] = json;
				}
				else if(data.recipient_part == "D")
				{
					var json = {};
					json.state = state;
					json.repub_don = 0;
					json.dem_don = amount_obj.toString();
					json.other_don = 0;

					mDict[state] = json;
				}
				else
				{
					var json = {};
					json.state = state;
					json.repub_don = 0;
					json.dem_don = 0;
					json.other_don = amount_obj.toString();
					mDict[state] = json;
				}
			}
		}
	}

	});

	for(var p in mDict)
	{
		result_json.push(mDict[p]);
	}

	return result_json;

	// The inclusion of this function is only for debugging purposes.
	//DumpDict(mDict);

}



function DumpDict(pDict)
{
	var s = 0;
	for(var p in pDict)
	{
		//alert(pDict[p].district + "," + pDict[p].district.repub_don + "," + pDict[p].district.dem_don + "," + pDict[p].district.other_don);
		alert(JSON.stringify(pDict[p]));
		s++;
	}
	alert(s);
}

function calcMaxPerDistrict(pSeatType, pJsonData)
{
//Example data. This should be discarded once the pJsonData variable is fed into this function

var result_json = [];
var mDict = {};

$.each(pJsonData, function(key, data){
if(data.seat == pSeatType)
{
	if(data.district == null || data.district.toString() == "")
	{
		console.log("Iteration: " + key.toString() + " has a blank/null district");
	}
	else
	{
		var district = data.district.toString().replace("-","_");
		var amount_obj = data.amount;

		var temp = mDict[district];

		if(typeof(temp) != 'undefined')
		{
			if(data.recipient_party == "R")
			{
				var temp_amount = parseInt(amount_obj, 10) + parseInt(temp.repub_don, 10);
				mDict[district].repub_don = temp_amount;
			}
			else if(data.recipient_part == "D")
			{
				var temp_amount = parseInt(amount_obj, 10) + parseInt(temp.dem_don, 10);
				mDict[district].dem_don = temp_amount;
			}
			else
			{
				var temp_amount = parseInt(amount_obj, 10) + parseInt(temp.other_don, 10);
				mDict[district].other_don = temp_amount;
			}
		}
		else
		{
			if(data.recipient_party == "R")
			{
				var json = {};
				json.district = district;
				json.repub_don = amount_obj.toString();
				json.dem_don = 0;
				json.other_don = 0;

				mDict[district] = json;
			}
			else if(data.recipient_part == "D")
			{
				var json = {};
				json.district = district;
				json.repub_don = 0;
				json.dem_don = amount_obj.toString();
				json.other_don = 0;

				mDict[district] = json;
			}
			else
			{
				var json = {};
				json.district = district;
				json.repub_don = 0;
				json.dem_don = 0;
				json.other_don = amount_obj.toString();
				mDict[district] = json;
			}
		}
	}
}

});

for(var p in mDict)
{
	result_json.push(mDict[p]);
}

return result_json;

// The inclusion of this function is only for debugging purposes.
//DumpDict(mDict);

}
