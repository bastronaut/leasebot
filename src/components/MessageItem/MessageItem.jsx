import React, {Component} from 'react';

export default class MessageItem extends Component {
  render() {
    return (
      <div className="right">
          <div className="message-container">
              <div className="message-body">
                  <div className="message">
                      <p>Does my leasecontract allow me to put wintertires on my car?</p>
                  </div>
              </div>
          </div>
          <div className="message-footer">
              <img src="img/textright.jpg" className="message-arrow" />
              <img src="img/luc.jpg" className="avatar-img" />
          </div>
      </div>>
    )
  }
}
