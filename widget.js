/**
 *
 */
import React, { Component } from 'react';

export default class Widget extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const width = this.props.width || 0.5;
    return (
      <div className={`cf fl w-${100 * width}`}>
        {this.props.children}
      </div>
    );
  }
}
