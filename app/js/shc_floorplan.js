// var dataset = _.map(_.range(25), function(i) {
//     return {
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         r: Math.random() * 30
//     };
// });

var dataset = [
    { x: 70, y: 0 },
    { x: 140, y: 0 },
    { x: 210, y: 0 },
    { x: 280, y: 0 },
    { x: 0, y: 120 },
    { x: 70, y: 120 },
    { x: 140, y: 120 },
    { x: 210, y: 120 },
    { x: 280, y: 120 },
    { x: 350, y: 120 },
    { x: 420, y: 120 }
];

var margin = { top: 0, right: 0, bottom: 0, left: 0 };
var w = 950 - margin.left - margin.right,
    h = 491 - margin.top - margin.bottom;

var svg = d3.select('#chartArea').append('svg')
    .attr('width', w + margin.left + margin.right)
    .attr('height', h + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

var xScale = d3.scaleLinear()
    .domain([0, w])
    .range([0, w]);

var yScale = d3.scaleLinear()
    .domain([h, 0])
    .range([h, 0]);

svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'room')
    .attr('x', function(d) {
        return xScale(d.x);
    })
    .attr('y', function(d) {
        return yScale(d.y);
    })
    .attr('width', 70)
    .attr('height', 70)
    .on('mouseover', function() {
        d3.select(this).classed('room', false).classed('room-selected', true);
    })
    .on('mouseout', function() {
        d3.select(this).classed('room-selected', false).classed('room', true);
    });