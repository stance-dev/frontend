/**
 *
 */
import React, { Component } from 'react';
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  CartesianGrid,
} from 'recharts';

export default class TimeSeriesViz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { month: 'Jan', reports: 5 },
        { month: 'Feb', reports: 10 },
        { month: 'Mar', reports: 15 },
        { month: 'Apr', reports: 3 },
        { month: 'May', reports: 4 },
        { month: 'Jun', reports: 1 },
      ],
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <div>
          <h3>Report Trend - Last 6 Months</h3>
        </div>
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="reports" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }

}
