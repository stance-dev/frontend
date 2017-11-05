/**
 *
 */
import React, { Component } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default class GenderBarChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { gender: 'woman', count: 50, },
        { gender: 'man', count: 15, },
        { gender: 'other', count: 3, },
        { gender: 'unspecified', count: 0, },
      ]
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <h3>Report Trend - Gender</h3>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <Tooltip />
            <CartesianGrid />
            <XAxis dataKey='gender' />
            <YAxis/>
            <Bar dataKey='count' fill='#F85032' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

}
