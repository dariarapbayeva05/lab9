const xSize = 500; 
const ySize = 500;
const margin = 40;
const xMax = xSize - margin*2;
const yMax = ySize - margin*2;

const numPoints = 100;
const data = [];
for (let i = 0; i < numPoints; i++) {
  data.push([Math.random() * xMax, Math.random() * yMax]);
}

const svg = d3.select("#myPlot")
  .append("svg")
  .append("g")
  .attr("transform","translate(" + margin + "," + margin + ")");

const x = d3.scaleLinear()
  .domain([0, 500])
  .range([0, xMax]);

svg.append("g")
  .attr("transform", "translate(0," + yMax + ")")
  .call(d3.axisBottom(x));

const y = d3.scaleLinear()
  .domain([0, 500])
  .range([ yMax, 0]);

svg.append("g")
  .call(d3.axisLeft(y));

svg.append('g')
  .selectAll("dot")
  .data(data).enter()
  .append("circle")
  .attr("cx", function (d) { return d[0] } )
  .attr("cy", function (d) { return d[1] } )
  .attr("r", 3)
  .style("fill", "Red");

  d3.csv("titanic.csv", (d) => {
            console.log(d)
        })