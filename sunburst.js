/**
 *
 */
import React, { Component } from 'react';

export default class Sunburst extends Component {

  constructor(props) {
    super(props);

    this.dimensions = {
      width: 960,
      height: 700,
    };
    this.dimensions.radius = Math.min(this.dimensions.width, this.dimensions.height) / 2,

    this.state = {
      data: {
        name: 'department',
        children: [
          {
            name: 'Engineering',
            children: [
              {
                name: 'John',
                children: [
                  {
                    name: 'Mike',
                    size: 1,
                  }
                ],
              },
              {
                name: 'Harry',
                children: [
                  {
                    name: 'Greg',
                    size: 1,
                  },
                  {
                    name: 'Mark',
                    size: 1,
                  },
                ],
              },
            ],
          },
          {
            name: 'Marketing',
            children: [
              {
                name: 'Mike',
                children: [
                  {
                    name: 'Elena',
                    size: 1,
                  },
                ],
              },
              {
                name: 'Stan',
                children: [
                  {
                    name: 'Chris',
                    size: 1,
                  },
                  {
                    name: 'Kelvin',
                    size: 1,
                  },
                ],
              },
              {
                name: 'Tracy',
                children: [
                  {
                    name: 'Beth',
                    size: 3,
                  },
                ],
              },
            ],
          },
          {
            name: 'Sales',
            children: [
              {
                name: 'Brad',
                children: [
                  {
                    name: 'Yael',
                    size: 1,
                  }
                ],
              },
            ],
          },
        ]
      }
    };
  }
  componentDidMount() {
    // Stash the old values for transition.
    function stash(d) {
      d.x0 = d.x;
      d.dx0 = d.dx;
    }

    // Interpolate the arcs in data space.
    function arcTween(a) {
      var i = d3.interpolate({ x: a.x0, dx: a.dx0 }, a);
      return function(t) {
        var b = i(t);
        a.x0 = b.x;
        a.dx0 = b.dx;
        return arc(b);
      };
    }

    const { width, height, radius } = this.dimensions;
    const color = d3.scale.category20c();

    var svg = d3.select(this.refs.chart).append('svg')
        .attr('width', width)
        .attr('height', height)
      .append('g')
        .attr('transform', `translate(${width / 2}, ${height * .52})`);

    var partition = d3.layout.partition()
        .sort(null)
        .size([2 * Math.PI, radius * radius])
        .value(d => 1);

    var arc = d3.svg.arc()
        .startAngle(d => d.x)
        .endAngle(d => d.x + d.dx)
        .innerRadius(d => Math.sqrt(d.y))
        .outerRadius(d => Math.sqrt(d.y + d.dy));

    var path = svg.datum(this.state.data).selectAll('path')
        .data(partition.nodes)
      .enter().append('path')
        .attr('display', d => d.depth ? null : 'none') // hide inner ring
        .attr('d', arc)
        .style('stroke', '#fff')
        .style('fill', d => color((d.children ? d : d.parent).name))
        .style('fill-rule', 'evenodd')
        .each(stash);

    path
        .data(partition.value(d => d.size).nodes)
      .transition()
        .duration(1500)
        .attrTween('d', arcTween);
  }

  render() {
    return (
      <div>
        <div ref='chart'></div>
      </div>
    );
  }

}
