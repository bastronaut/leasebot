import React, {PropTypes, Component} from 'react';

// HOW TO USE: you can pass this component a list of objects of the form:
// [
//   { text: 'yes', link: 'http...'},
//   { text: 'no', link: 'http...'},
//   ...
// ]
//
// It will render each given object in the array as an option with its link

// #############
// hoe nu alternatieve antwoorden te renderen:
// #############
// Ik zou waarschijnlijk op de <a href..> een onclick methode toevoegen. Deze is doorgegeven als property vanaf een parent object
// wanneer deze aangeroepen wordt , wordt een action dispatcht waarmee een nieuw bericht object wordt toegevoegd aan de messagelist in de store state.
// Je kan bv uit het 'remaininganswers' array de eerste pakken, en uit de array verwijderen. Deze kan je laten renderen door soortegelijke code
// aan de MESSAGE_SEND action.
//
//

export default class MessageOptions extends Component {
	render() {
    console.log('\nrendering the otptions..\n');
    console.log(this.props);
		return (
			<div className="message-options">

				{this.props.msgoptions.map( (option, i) =>
					<div className={ "option" + (option.type == "url" ? " url-option" : "" ) } key={'msgoption_'+ option.text +'i'}>
						{	option.type == "url" ?
								<a href={option.link} target={option.type == "url" ? "_blank" : "" }>{option.text}</a> :
								<a onClick={this.props.evaluateAnswer.bind(this, option.link)}>{option.text}</a>
						}
					</div>
				)}

			</div>
		)
	}
}

// TODO: optional but probably safe to implement
// MessageItem.propTypes = {
// 	sender: PropTypes.string.isRequired, // old proptype, change it
// 	messagetext: PropTypes.string.isRequired // old proptype, change it
// }
//
