import React from 'react'
import { render } from 'react-dom'

var TheContent = React.createClass({
	render: function() {
		if ( this.props.data ) {
			var content = this.props.data.content.rendered;
		} else {
			var content = 'Loading';
		}
		return(
			<div className={this.props.className} dangerouslySetInnerHTML={{__html: content}}>
			</div>
		);
	}
});

module.exports = TheContent;
