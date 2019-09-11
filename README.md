# Project: JavaScript and DOM Manipulation
This project uses a JSON data set provides by UFO trackers. But the main of this development is to show how to work D3.js manipulation the Document Object Model (DOM).

## Publish:
 https://manoelbritto.github.io/JavaScript-DOM-Manipulation/
 
### Coding
This page was developed using JavaScript with D3.js ("https://d3js.org/d3.v5.min.js")
With D3.js you can manipulate the HTML page dynamically.
For instance, to create an HTML table is simple:

In your HTML page, you must indicate the place you want to show up the new table, for instance, you can use an HTML tag or an id inside the tag.
```html
<tbody></tbody>
```
> or

```HTML
<h2 id="result"></h2>
```
> After that just send call this tag using D3:

```JavaScript
var tableHtml = d3.select("tbody");
tableHtml.attr();

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
```

Check the code [here](/static/js/app.js)

### Data Set
The code users filter and forEach functions to handle the JSON data set.
Check the data set [here](/static/js/data.js)

## Features:
 * JavaScript
    * D3.js
 * Json data set
 * HTML and CSS3
