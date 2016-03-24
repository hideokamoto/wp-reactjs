import React from 'react'
import { render } from 'react-dom'

var TheAuthor = React.createClass({
	render: function() {
		if ( this.props.data['_embedded']['author'] ) {
			var author = this.props.data['_embedded']['author'][0];
			var className = this.props.className + ' ' + author['slug'];
			return (
				<a href={author['link']} className={className}>{author['name']}</a>
			)
		} else {
			return (
				<div/>
			)
		}
	}
});

module.exports = TheAuthor;
