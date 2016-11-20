import React, {Component} from 'react';
import logoUrl from './logo.png';

export default class Header extends Component {
  render () {
    return (
      <div class="header">
          <img src="{logoUrl}" />
          {logoUrl}
      </div>
    )
  }
}
