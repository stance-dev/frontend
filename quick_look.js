/**
 *
 */
import React, { Component } from 'react';

export default class QuickLook extends Component {
  render() {
    return (
      <div>

        <div>
          <h1>Quick Look</h1>
        </div>

        <div className='cf tc'>
          <div className='fl w-30'>
            <div>this month</div>
            <div>
              <h1>45,000</h1>
            </div>
          </div>

          <div className='fl w-30'>
            <div>this year</div>
            <div>
              <h1>145,000</h1>
            </div>
          </div>

          <div className='fl w-30'>
            <div>trending</div>
            <div>
              <h1 className='red'>Upwards</h1>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
