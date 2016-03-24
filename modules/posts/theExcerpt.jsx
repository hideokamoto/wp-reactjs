import React from 'react'
import { render } from 'react-dom'

var TheExcerpt = React.createClass({
	render: function() {
		if ( this.props.data ) {
			var excerpt = this.props.data.excerpt.rendered;
		} else {
			var excerpt = 'Loading';
		}
		return(
			<div className={this.props.className} dangerouslySetInnerHTML={{__html: excerpt}}>
			</div>
		);
	}
});

module.exports = TheExcerpt;
