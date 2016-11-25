import React, {Component} from 'react';
import s from './MessageItem.css';

export default class MessageItem extends Component {
  render() {
    return (
      <div className={s.right}>
          <div className={s.messagecontainer}>
              <div className={s.messagebody}>
                  <div className={s.message}>
                      <p>Does my leasecontract allow
                        me to put wintertires on my car?</p>
                  </div>
              </div>
          </div>
          <div className={s.messagefooter}>
              <img src="img/textright.jpg" className={s.messagearrow} />
              <img src="img/luc.jpg" className={s.avatarimg} />
          </div>
      </div>
    )
  }
}
