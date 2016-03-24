import React from 'react'
import { render } from 'react-dom'

var TheId = React.createClass({
	render: function() {
		if ( this.props.data ) {
			var id = this.props.data.id;
		} else {
			var id = 'Loading';
		}
		return(
			<div className={this.props.className}>{id}</div>
		);
	}
});

module.exports = TheId;
