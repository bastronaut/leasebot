import React, {Component} from 'react';


export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">

          <div className="inserttext">
              <input type="textarea" className="inputmessage" name="inputmessage" placeholder="Ask me anything " />
          </div>
          <div className="inserttexticons">
              <img src="./send.svg" className="sendicon" />
          </div>
      </div>
    )
  }
}
