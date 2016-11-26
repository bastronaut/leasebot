import React, {Component} from 'react';
import s from './logo.png'

export default class Header extends Component {
  render () {
    return (
      <div className="header">
          <img src={s} />
      </div>
    )
  }
}
