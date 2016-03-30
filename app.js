$(document).ready(function() {
    $('#map').usmap({
    // The click action
    click: function(event, data) {
        $('#clicked-state')
	    .text(function(){console.log("A");return 'This is '+data.name + " and the Crime Rate is " + getData(data.name,(document.getElementById("slider").value).toString());})
	    .parent().effect('highlight', {color: '#C7F464'}, 2000);
    }});
});

var slider = document.getElementById("slider");
var year = document.getElementById("year"); // not the value, but the element

var showYear = function() {
    year.innerHTML = "Year: " + slider.value;
};

showYear();

/*
var newMap = [["N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","Maine"],["Alaska","N/A","N/A","N/A","N/A","N/A","Wisconsin","N/A","N/A","N/A","Vermont","New Hampshire"],["N/A","Washington","Idaho","Montana","North Dakota","Minnesota","Illinois","Michigan","N/A","New York","Massachussetts","N/A"],["N/A","Oregon","Nevada","Wyoming","South Dakota","Iowa","Indiana","Ohio","Pennsylvania","New Jersey","Connecticut","Rhode Island"],["N/A","California","Utah","Colorado","Nebraska","Montana","Kentucky","West Virginia","Virginia","DC","Maryland","Delaware"],["N/A","N/A","Arizona","New Mexico","Kansas","Arkansas","Tennessee","North Carolina","South Carolina","N/A","N/A","N/A"],["N/A","N/A","Oklahoma","Louisiana","Mississippi","Alabama","Georgia","N/A","N/A","N/A","N/A"],["Hawaii","N/A","N/A","Texas","N/A","N/A","N/A","N/A","Florida","N/A","N/A","N/A"]];

d3.csv("states.csv", function(data) {
    data.forEach(function(d) {
	d.C1 = +d.C1;
        d.C2 = +d.C2;
	d.C3 = +d.C3;
        d.C4 = +d.C4;	
	d.C5 = +d.C5;
        d.C6 = +d.C6;
	d.C7 = +d.C7;
        d.C8 = +d.C8;
	d.C9 = +d.C9;
        d.C10 = +d.C10;
	d.C11 = +d.C11;
        d.C12 = +d.C12;
    });
})

var thead;
var tbody;
function go(data, columns) {
    var table = d3.select("body").append("table")
    thead = table.append("thead"),
    tbody = table.append("tbody");

    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
        .text(function(column) { return column; });

    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    var cells = rows.selectAll("td")
        .data(function(row) {
	    return columns.map(function(column) {
                return {column: column, value: row[column]};
	    });
        })
        .enter()
        .append("td")
	.style("width", function(d) {return "40px";})
    	.style("height", function(d) {return "40px";})
	.style("background-color", function(){return "blue"})
        .html(function(d) { console.log(d.value); return d.value; });
    
    return table;
}
*/
/*
  for (var i = 0; i < arrayLength; i++){
  for (var j = 0; j < newMap[i].length; j++) {
  d3.select(".backupMap")
  .selectAll("div")
  .data(function(){console.log(newMap[i]);return newMap[i];})
  .enter().append("div")
  .style("width", function(d) {return "40px";})
  .style("background-color", "blue")
  .text(function(d){console.log("ok"); return newMap[i][j];});
  }
  }
*/

//go("States.csv",["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12"]);

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
    //console.log(data[2]);
});

var getData = function(state,currYear){
    var stateUR;
    d3.csv("UnemploymentRates.csv", function(data){
	data.forEach(function(d){
	    if (d["State"] == state){
		//console.log(d[currYear]);
		return d[currYear];
	    }
	})
    });
}
//Ex.: getData("Maine","2009");
