/**
 *
 */
import React, { Component } from 'react';


export default class Sidebar extends Component {
  render() {
    return (
      <div className='pa4'>
        <header className='pv2'>
          <div className='big mb3 orange'>stance.</div>
          <hr/>
          <div>
            <div className='mb3'>
              <a className='link' href='#' onClick={this.props.changePage.bind(this, 'file-report')}>File Report</a>
            </div>
            <div className='mb3'>
              <a className='link' href='#'>Manage</a>
            </div>
            <div className='mb3'>
              <a className='link' href='#' onClick={this.props.changePage.bind(this, 'analytics')}>Analytics</a>
            </div>
            <div className='mb3'>
              <a className='link' href='#'>Resources</a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
