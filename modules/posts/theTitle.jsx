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
			<div className={this.props.className}>{title}</div>
		);
	}
});

module.exports = TheTitle;
