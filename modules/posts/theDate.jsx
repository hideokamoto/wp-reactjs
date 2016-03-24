import React from 'react'
import { render } from 'react-dom'

var TheDate = React.createClass({
	render: function() {
		if ( this.props.data ) {
			console.log(this.props.data);
			var date = new Date(this.props.data.date_gmt).toLocaleDateString();
		} else {
			var date = 'Loading';
		}
		return(
			<p className={this.props.className}>
				{date}
			</p>
		);
	}
});

module.exports = TheDate;
