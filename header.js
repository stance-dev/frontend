/**
 *
 */
import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <div className='bg-orange white'>
        <header className='tc pv2'>
          <h1>stance.</h1>
          <nav>
            <a className='link white dib ml2 mr2' href='#'>File Report</a>
            <a className='link white dib ml2 mr2' href='#'>Overview</a>
            <a className='link white dib ml2 mr2' href='#'>Analysis</a>
            <a className='link white dib ml2 mr4' href='#'>Charts and shit</a>
          </nav>
        </header>
      </div>
    );
  }
}
