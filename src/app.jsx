import styles from './index.scss';
import React, {Component} from 'react';
import Header from './components/Header';
import Composer from './components/Composer';
import Messages from './components/Messages';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<div className="wrapper">
          <Messages/>
					<Composer/>
				</div>
			</div>
		)
	}
}
