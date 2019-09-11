// from data.js
var tableData = data;

// identify the button to work with event
var filterButton = d3.select("#filter-btn");
var tableHtml = d3.select("tbody");
tableHtml.attr();

// handle the button event and apply the filter
filterButton.on("click", function() {
  var filterDate = d3.select("#datetime").property("value");
  var filterCountry = d3.select("#menu-country").node().value;
  var filterState = d3.select("#menu-state").node();
  var filterCity = d3.select("#menu-city").node();
  var filterShape = d3.select("#menu-shape").node();
  //console.log(filterDate);
  //filter
  var valueFilter = tableData.filter(value => value.datetime == filterDate);
  if (filterCountry != "") {
    valueFilter = valueFilter.filter(value => value.country == filterCountry);
  }

  if (filterState != null) {
    valueFilter = valueFilter.filter(value => value.state == filterState.value);
  }

  if (filterCity != null) {
    valueFilter = valueFilter.filter(value => value.city == filterCity.value);
  }

  if (filterShape != null) {
    valueFilter = valueFilter.filter(value => value.shape == filterShape.value);
  }
  //clean the html before including more table line
  tableHtml.html("");
  d3.select("#result").html("");
  console.log(valueFilter);
  if (valueFilter == "") {
    d3.select("#result").text("Result not found");
  } else {
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
  }
});

//filter to get diffent countries
var countryDc = { "": "" };
tableData.forEach(value => {
  countryDc[value.country] = value.country;
});

// console.log(countryDc);

// create a select section for country
var textCountryMenu = d3.select("#filters");
textCountryMenu.append("p").text("Country: ");

var menuValueCountry = d3
  .select("#filters")
  .append("select")
  .attr("id", "menu-country"); //including an id

Object.keys(countryDc).forEach(value => {
  menuValueCountry
    .append("option")
    .text(value)
    .attr("value", function() {
      return value;
    });
});
// end

//based on the data select by previous drop-menu from country, it creates a state menu
d3.select("select").on("click", function() {
  var stateDc = {};
  clearAll();
  var selected = d3.select("#menu-country").node().value;
  //find state base on country
  tableData.filter(value => {
    if (value.country == selected) {
      stateDc[value.state] = value.state;
    }
  });

  // create the select section for state
  if (selected != "") {
    var textStateMenu = d3.select("#state");
    textStateMenu.html("");
    textStateMenu.append("p").text("State: ");

    var menuValueState = d3
      .select("#state")
      .append("select")
      .attr("id", "menu-state"); //including an id

    console.log(stateDc);
    Object.keys(stateDc).forEach(value => {
      menuValueState
        .append("option")
        .text(value)
        .attr("value", function() {
          return value;
        });
    });
  }
});
// end

//based on the data select by previous drop-menu from state, it creates a city menu
d3.select("#state").on("click", function() {
  var stateDc = {};
  d3.select("#shape").html("");
  var selected = d3.select("#menu-state").node().value;
  //find state base on country
  tableData.filter(value => {
    if (value.state == selected) {
      stateDc[value.city] = value.city;
    }
  });

  // create the select section for city
  var textCityMenu = d3.select("#city");
  textCityMenu.html("");
  textCityMenu.append("p").text("City: ");

  var menuValueCity = d3
    .select("#city")
    .append("select")
    .attr("id", "menu-city"); //including an id

  console.log(stateDc);
  Object.keys(stateDc).forEach(value => {
    menuValueCity
      .append("option")
      .text(value)
      .attr("value", function() {
        return value;
      });
  });
});
// end

//based on the data select by previous drop-menu from city, it creates a shape menu
d3.select("#city").on("click", function() {
  var stateDc = {};
  var selected = d3.select("#menu-city").node().value;
  //find state base on country
  tableData.filter(value => {
    if (value.city == selected) {
      stateDc[value.shape] = value.shape;
    }
  });

  // create the select section for city
  var textShapeMenu = d3.select("#shape");
  textShapeMenu.html("");
  textShapeMenu.append("p").text("Shape: ");

  var menuValueShape = d3
    .select("#shape")
    .append("select")
    .attr("id", "menu-shape"); //including an id

  console.log(stateDc);
  Object.keys(stateDc).forEach(value => {
    menuValueShape
      .append("option")
      .text(value)
      .attr("value", function() {
        return value;
      });
  });
});
// end

function clear() {
  d3.select("#city").html("");
  d3.select("#shape").html("");
}

function clearAll() {
  d3.select("#state").html("");
  d3.select("#city").html("");
  d3.select("#shape").html("");
}
