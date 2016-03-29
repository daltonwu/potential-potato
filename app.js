$(document).ready(function() {
    $('#map').usmap({
  // The click action
  click: function(event, data) {
    $('#clicked-state')
      .text('You clicked: '+data.name)
      .parent().effect('highlight', {color: '#C7F464'}, 2000);
  }});
});

var slider = document.getElementById("slider");

var showYear = function(){
    document.getElementById("year").innerHTML="Year: " + slider.value;
}
showYear();

slider.addEventListener('click',showYear);

d3.csv("UnemploymentRates.csv", function(data){
    console.log(data[2]["2009"]);
});

d3.csv("UnemploymentRates.csv", function(data){
    data.forEach(function(d){
	d["2009"] = +d["2009"];
	d["2010"] = +d["2010"];
	d["2011"] = +d["2011"];	
	d["2012"] = +d["2012"];	
	d["2013"] = +d["2013"];
	d["2014"] = +d["2014"];
	d["2015"] = +d["2015"];
	d[""] = +d[""];
    });
    console.log(data[2]);
});

