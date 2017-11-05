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
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default class TimeSeriesStackedViz extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    const departments = ['Engineering', 'Production', 'Marketing', 'Human Resources', 'Accounting'];
    for (let i = 0; i < data.length; i++) {
      let m = data[i];
      for (let j = 0; j < departments.length; j++) {
        let d = departments[j];
        if (!(d in m)) {
          m[d] = 0;
        }
      }
    }

    return (
      <div>
        <div>
          <h3>Last 7 months - By Department</h3>
        </div>
        <div>
          <ResponsiveContainer width='100%' height={400}>
            <AreaChart data={data}
                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <XAxis dataKey='month' />
              <YAxis />
              <Area type='monotone' dataKey='Engineering' stackId="1" stroke='#1C0E63' fill='#1C0E63' />
              <Area type='monotone' dataKey='Production' stackId="1" stroke='#DEAED2' fill='#DEAED2' />
              <Area type='monotone' dataKey='Marketing' stackId="1" stroke='#11BAD5' fill='#11BAD5' />
              <Area type='monotone' dataKey='Human Resources' stackId="1" stroke='#3A5EC1' fill='#3A5EC1' />
              <Area type='monotone' dataKey='Accounting' stackId="1" stroke='#F85032' fill='#F85032' />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
