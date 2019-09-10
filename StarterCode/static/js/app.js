// from data.js
var tableData = data;

// identify the button to work with event
var filterButton = d3.select("#filter-btn");
var tableHtml = d3.select("tbody");
tableHtml.attr();

// treat the button event and apply the filter
filterButton.on("click", function() {
  var filterDate = d3.select("#datetime").property("value");
  console.log(filterDate);
  var valueFilter = tableData.filter(value => value.datetime == filterDate);
  tableHtml.html("");
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
