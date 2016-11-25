import React, {Component} from 'react';
import s from './Composer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className={s.footerwrapper}>

          <div className={s.inserttext}>
              <input type="textarea" className={s.inputmessage} name={s.inputmessage} placeholder="Ask me anything " />
          </div>
          <div className={s.inserttexticons}>
              <img src="./send.svg" className={s.sendicon} />
          </div>
      </div>
    )
  }
}
