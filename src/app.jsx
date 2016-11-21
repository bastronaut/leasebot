import styles from './index.scss';
import React, {Component} from 'react';
import Header from './components/Header'


export default class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<div className="wrapper">
					<div className="content">
						messages
					</div>
					<Footer/>
				</div>
			</div>
		)
	}
}
