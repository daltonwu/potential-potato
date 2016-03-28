//<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
//<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>

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
