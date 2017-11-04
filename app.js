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
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='mb5'>
            <ReportForm />
          </div>
          <div className='mb5'>
            <Sunburst />
          </div>
          <div className='mb5'>
            <TimeSeriesViz />
          </div>
          <div className='mb5'>
            <QuickLook />
          </div>
          <div className='mb5'>
            <TimeSeriesStackedViz />
          </div>
        </div>
      </div>
    );
  }
}
