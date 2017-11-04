/**
 *
 */
import React, { Component } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

export default class TimeSeriesStackedViz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { month: 'Jan', engineering: 30, sales: 2, accounting: 6, hr: 0 },
        { month: 'Feb', engineering: 9,  sales: 6, accounting: 1, hr: 1 },
        { month: 'Mar', engineering: 23, sales: 8, accounting: 1, hr: 2 },
        { month: 'Apr', engineering: 17, sales: 3, accounting: 1, hr: 0 },
        { month: 'May', engineering: 13, sales: 9, accounting: 1, hr: 0 },
        { month: 'Jun', engineering: 20, sales: 4, accounting: 1, hr: 1 },
      ]
    }
  }
  render() {
    const { data } = this.state;

    return (
      <div>
        <div>
          <h3>Report Trend - By Department</h3>
        </div>
        <div>
          <AreaChart width={800} height={400} data={data}
                      margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <XAxis dataKey='month' />
            <YAxis />
            <Area type='monotone' dataKey='engineering' stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Area type='monotone' dataKey='sales' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='accounting' stackId="1" stroke='#ffc658' fill='#ffc658' />
            <Area type='monotone' dataKey='hr' stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Tooltip />
          </AreaChart>
        </div>
      </div>
    );
  }
}
