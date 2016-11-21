import React, {Component} from 'react';
import MessageItem from './components/MessageItem';

export default class Messages extends Component {
  render() {
    return (
      <div>messages:
      <MessageItem/>
      </div>
    )
  }
}
