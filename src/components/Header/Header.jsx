import React, {Component} from 'react';
import s from './Header.css';
import logoUrl from './logo.png';

export default class Header extends Component {
  render () {
    return (
      <div className={s.header}>
          <img src={logoUrl} />
      </div>
    )
  }
}
