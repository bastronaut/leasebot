import React, {Component} from 'react';
import logoUrl from './img/logo.png';

export default class Header extends Component {
  render () {
    return (
      <div class="header">
          <img src="./img/logo.png" />
          {logoUrl}
      </div>
    )
  }
}
