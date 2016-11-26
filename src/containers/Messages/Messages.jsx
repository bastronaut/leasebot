import React, {Component} from 'react';
import MessageItem from '../../components/MessageItem';


export default class Messages extends Component {
  render() {
    return (
      <div className="messages">
      <MessageItem
        sender="bot"
        messagetext="Does my leasecontract allow
          me to put wintertires on my car?"/>
      </div>
    )
  }
}
