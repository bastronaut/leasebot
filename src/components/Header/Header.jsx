import React, {Component} from 'react';
import logoUrl from './logo.png';

export default class Header extends Component {
  render () {
    return (
      <div className="header">
          <img src="./img/logo.png" />
          {logoUrl}
      </div>
    )
  }
}
