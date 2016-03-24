import React from 'react'
import { render } from 'react-dom'

var ThePostThumbnail = React.createClass({
	render: function() {
		if ( this.props.data['_embedded']['https://api.w.org/featuredmedia'] ) {
			var thumb = this.props.data['_embedded']['https://api.w.org/featuredmedia'][0]['media_details']['sizes']['thumbnail'];
			var path = thumb['source_url'];
			return (
				<img
					src={path}
					className={this.props.className}
					width={thumb['width']}
					height={thumb['height']}
					alt={this.props.data['title']['rendered']}/>
			)
		} else {
			return (
				<div/>
			)
		}
	}
});

module.exports = ThePostThumbnail;
