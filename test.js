

alert('new onyong');

var d = null;
function thisIsMyCallback(data) 
{
	alert('onyong from the right place');
	d = data;
	alert(data);
	console.log(d);
}

var endpoint = "http://transparencydata.com/api/1.0/contributions.json?apikey=ac889422c02d446383ac5fffcebf5665&contributor_state=ak&date=><|2002-09-01|2002-12-31&seat=state:upper|state:lower";

$('#getdata-button').live('click', function(){
    $.getJSON(endpoint + '&callback=?', function(data) {
        //alert(data); //uncomment this for debug
        //alert (data.item1+" "+data.item2+" "+data.item3); //further debug
        var output = data.contributor_name;

    });
});
