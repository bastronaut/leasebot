import React, {Component} from 'react';
require('./logo.png');

export default class Header extends Component {
  render () {
    return (
      <div className="header">
          <img src={require('./logo.png')} />
      </div>
    )
  }
}
