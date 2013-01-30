function GetNewAggregator(url)
{
	var sum = 0; 
	return function(page)
	{
		// use url & page to get set of numbers.. say this is in variable a.
		var a = []; //replace with actual call to web service. 

		// say we have a function GetSum() that will sum up numbers 
		// in an array. 
		return sum + GetSum(a);
	}
}


var affiliationAggregator = GetNewAggregator('datafestapi/affiliation-endpoint');

affiliationAggregator(1); 
affiliationAggregator(2); 
