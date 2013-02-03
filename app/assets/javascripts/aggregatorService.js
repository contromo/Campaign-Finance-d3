
/*With the federal:house query as input, calculates the sum of campaign contributions per district and per party*/
function calcHouseSumPerDistrict(pJsonData)
{
	// console.log("calcHouseSumPerDistrict");

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

/*With federal:senate query as the input, this function outputs the federal:senate contributions per state*/
function calcSenateSumPerState(pJsonData)
{
	// console.log("calcSumPerState");

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
				else if(data.recipient_party == "D")
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
				else if(data.recipient_party == "D")
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

/*Outputs the a block of json per state that has the summed contributions by each party for state:governor, state:upper, state:lower*/
function calcStateSum(pJsonData)
{
	// console.log("calcStateSum");

	var result_json = [];
	var mDict = {};

	$.each(pJsonData, function(key, data)
	{
		if(data.seat == "state:governor" || data.seat == "state:lower" || data.seat == "state:upper")
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
					else if(data.recipient_party == "D")
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
					else if(data.recipient_party == "D")
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

/*Outputs a single block of json that represents the sum of campaign contributions per party for "federal:president"*/
function calcPresContrib(pJsonData)
{
	console.log("calcSumerPerDistrict");
	var result_json = [];

	var repub_amount = 0;
	var dem_amount = 0;
	var other_amount = 0;

	$.each(pJsonData, function(key, data){
		if(data.seat == "federal:president")
		{
			if(data.recipient_party == "R")
			{
				repub_amount += parseInt(data.amount, 10);
			}
			else if(data.recipient_party == "D")
			{
				dem_amount += parseInt(data.amount, 10);
			}
			else
			{
				other_amount += parseInt(data.amount, 10);
			}
		}

	});

	var json = {};
	json.repub_don = repub_amount;
	json.dem_don = dem_amount;
	json.other_don = other_amount;

	result_json.push(json);

	return result_json;
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

/*This function assumes that the incoming json has properties dem_don and repub_don!!!!*/
function calcMaxContrib(pJsonData)
{
	var _max = {};
	_max.dem_don = 0;
	_max.repub_don = 0;
	_max.other_don = 0;
	$.each(pJsonData, function(key, data){
		if(parseInt(data.dem_don,10) > parseInt(_max.dem_don, 10))
		{
			_max.dem_don = data.dem_don;
		}
		if(parseInt(data.repub_don,10) > parseInt(_max.repub_don,10))
		{
			_max.repub_don = data.repub_don;
		}
		if(parseInt(data.other_don,10) > parseInt(_max.other_don,10))
		{
			_max.other_don = data.other_don;
		}
	});

	console.log(JSON.stringify(_max));
	return _max;

	// The inclusion of this function is only for debugging purposes.
	//DumpDict(mDict);

}
function GenerateMaxFromMaxJSON(pJsonData1, pJsonData2, pJsonData3)
{
	var _max = {};
	_max.dem_don = Math.max(parseInt(pJsonData1.dem_don, 10), parseInt(pJsonData2.dem_don, 10), parseInt(pJsonData3.dem_don, 10));
	_max.repub_don = Math.max(parseInt(pJsonData1.repub_don, 10), parseInt(pJsonData2.repub_don, 10), parseInt(pJsonData3.repub_don, 10));
	_max.other_don = Math.max(parseInt(pJsonData1.other_don, 10), parseInt(pJsonData2.other_don, 10), parseInt(pJsonData3.other_don, 10));

	return _max;
}
