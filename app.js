/**
 *
 */
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Sunburst from './sunburst';
import TimeSeriesViz from './time_series_viz';
import TimeSeriesStackedViz from './time_series_stacked_viz';
import API from './api'
import QuickLook from './quick_look';
import ReportForm from './report_form';
import Sidebar from './sidebar';
import GenderBarChart from './gender_bar_chart.js';
import Widget from './widget';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeSeriesData: [],
      timeSeriesStackedData: [],
      sunburstData: null,
      page: 'analytics',
    };
    this.API = new API();
  }

  componentDidMount() {
    this.API.fetchTimeSeriesData()
      .then(data => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const getMonth = date => date.split(' ')[2];

        let o = {};
        let p = {};
        let q = {};

        for (let id in data) {
          let report = data[id];
          let month = getMonth(report.created_at);

          // time series
          if (!(month in o)) {
            o[month] = 0;
          }
          o[month]++;

          // time series stacked
          if (!(month in p)) {
            p[month] = {};
          }
          if (!(report.department_against in p[month])) {
            p[month][report.department_against] = 1;
          } else {
            p[month][report.department_against]++;
          }
        }

        for (let id in data) {
          let report = data[id];
          if (!(report.department_against in q)) {
            q[report.department_against] = {};
          }
          if (!(report.against in q[report.department_against])) {
            q[report.department_against][report.against] = {};
          }
          if (!(report.created_by in q[report.department_against])) {
            q[report.department_against][report.against][report.created_by] = 0;
          }
          q[report.department_against][report.against][report.created_by]++;
        }

        const sunburstData = Object.keys(q).map(dept => ({
          name: dept,
          children: Object.keys(q[dept]).map(employee => ({
            name: employee,
            children: Object.keys(q[dept][employee]).map(reporter => ({
              name: reporter,
              size: q[dept][employee][reporter],
            })),
          })),
        }));

        let timeSeriesData = Object.keys(o).map(month => ({ month, reports: o[month] }));
        timeSeriesData = timeSeriesData.sort((a, b) => months.indexOf(a.month) > months.indexOf(b.month));

        let timeSeriesStackedData = Object.keys(p).map(month => Object.assign(p[month], { month }));
        timeSeriesStackedData = timeSeriesStackedData.sort((a, b) => months.indexOf(a.month) > months.indexOf(b.month));

        this.setState({ timeSeriesData, timeSeriesStackedData, sunburstData });
      })
  }

  changePage(page) {
    this.setState({ page });
  }

  render() {
    const {
      page,
      sunburstData,
      timeSeriesData,
      timeSeriesStackedData,
    } = this.state;

    return (
      <div className='fh'>

        <div className='cf fh'>
          <div className='fl w-20 fh'>
            <Sidebar changePage={this.changePage.bind(this)}/>
          </div>

          <div className='fl w-80 white bg-midnight-blue pa6 fh' style={{overflow: 'scroll'}}>

            {page === 'file-report' && <div className='mb5 fh'>
              <ReportForm />
            </div>}

            {page === 'analytics' && <div>
              <div className='cf'>
                <div className='cf mb8'>
                  <Widget width={1}>
                    <QuickLook />
                  </Widget>
                </div>

                <div className='cf mb8'>
                  <Widget width={1}>
                    <TimeSeriesStackedViz data={timeSeriesStackedData}/>
                  </Widget>
                </div>

                {sunburstData && <div className='cf mb8'>
                  <Widget width={1}>
                    <Sunburst data={sunburstData} />
                  </Widget>
                </div>}

                <div className='cf mb8'>
                  <Widget>
                    <TimeSeriesViz data={timeSeriesData}/>
                  </Widget>

                  <Widget>
                    <GenderBarChart />
                  </Widget>
                </div>
              </div>
            </div>}

          </div>
        </div>

      </div>
    );
  }
}
