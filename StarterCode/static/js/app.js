// from data.js
var tableData = data;

// identify the button to work with event
var filterButton = d3.select("#filter-btn");
var tableHtml = d3.select("tbody");
tableHtml.attr();

// handle the button event and apply the filter
filterButton.on("click", function() {
  var filterDate = d3.select("#datetime").property("value");
  console.log(filterDate);
  //filter
  var valueFilter = tableData.filter(value => value.datetime == filterDate);
  //clean the html before including more table line
  tableHtml.html("");
  //looping into valueFilter and target the corret position
  valueFilter.forEach(value => {
    tableHtml.append("tr");
    tableHtml.append("td").text(value.datetime);
    tableHtml.append("td").text(value.city);
    tableHtml.append("td").text(value.state);
    tableHtml.append("td").text(value.country);
    tableHtml.append("td").text(value.shape);
    tableHtml.append("td").text(value.durationMinutes);
    tableHtml.append("td").text(value.comments);
  });
});

//filter to get diffent countries
var countryDc = {};
tableData.forEach(value => {
  countryDc[value.country] = value.country;
});

console.log(countryDc);

var textCountryMenu = d3.select("#filters");
textCountryMenu.append("p").text("Country: ");

var menuValueCountry = d3
  .select("#filters")
  .append("select")
  .attr("id", "menu-select");

Object.keys(countryDc).forEach(value => {
  menuValueCountry
    .append("option")
    .text(value)
    .attr("value", function() {
      return value;
    });
});

d3.select("select").on("change", function(d) {
  var selected = d3.select("#menu-select").node().value;
  console.log(selected);
});
