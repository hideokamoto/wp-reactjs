import React from 'react'
import { render } from 'react-dom'

var TheTitle = React.createClass({
	render: function() {
		if ( this.props.data ) {
			var title = this.props.data.title.rendered;
		} else {
			var title = 'Loading';
		}
		return(
			<h1 className={this.props.className}>{title}</h1>
		);
	}
});

module.exports = TheTitle;
