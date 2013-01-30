

alert('new onyong');


function thisIsMyCallback(data) 
{
	alert('onyong from the right place');
	alert(data);
}

var endpoint = "http://transparencydata.com/api/1.0/contributions.json?apikey=ac889422c02d446383ac5fffcebf5665&contributor_state=ak&date=><|2002-09-01|2002-12-31&seat=state:upper|state:lower";

$('#getdata-button').live('click', function(){
    $.getJSON(endpoint + '&callback=thisIsMyCallback()', function(data) {
        //alert(data); //uncomment this for debug
        //alert (data.item1+" "+data.item2+" "+data.item3); //further debug
        output = data.contributor_name;

    });
});
