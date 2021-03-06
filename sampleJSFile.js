﻿<html>
<script src='https://d3js.org/d3.v5.min.js'></script>
<style> circle {fill: lightblue; stroke: black;} </style>
<body onload='init()'>
<svg width=300 height=300>
</svg>
<script>
async function init() {
  
const data = await d3.csv('https://flunky.github.io/cars2017.csv');

var margin =50
var width = 200
var height = 200


var x = d3.scaleLog().range([0,width]).domain([10,150]);
var y = d3.scaleLog().range([height,0]).domain([10,150]);
var xAxis = d3.axisBottom(x).tickFormat(d3.format("~s")).tickValues([10,20,50,100]);
var yAxis = d3.axisLeft(y).tickFormat(d3.format("~s")).tickValues([10,20,50,100]);

const logScale = d3.scaleLog()
  .domain([10,150])
  .range([10, 150]);
  
var svg = d3.select("svg")
             //.append("svg")
             .attr("width",width + 2*margin)
    .attr("height",height + 2*margin)
    .append("g")
        .attr("transform","translate(" + margin + "," + margin + ")");

svg.selectAll("circle")
    .data(data)
    .enter().append("circle")
    .attr("cx",function(d, i) { return x(d.AverageCityMPG);})
    .attr("cy", function( d, i) {return y(d.AverageHighwayMPG);})
    .attr("r", function(d,i){return 2+(+d["EngineCylinders"]);})
;

  
d3.select("svg").append("g")
.attr("transform","translate("+margin+","+margin+")")
.call(yAxis);

d3.select("svg").append("g")
.attr("transform","translate("+margin+","+(height+margin)+")")
.call(xAxis);
             
}
</script>
</body>
</html>

