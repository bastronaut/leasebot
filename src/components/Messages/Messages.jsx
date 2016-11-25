import React, {Component} from 'react';
import MessageItem from '../MessageItem';


export default class Messages extends Component {
  render() {
    return (
      <div className="messages">
      <MessageItem/>
      </div>
    )
  }
}
