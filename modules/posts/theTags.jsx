import React from 'react'
import { render } from 'react-dom'

var TheTags = React.createClass({
	render: function() {
		if ( this.props.data['_embedded']['https://api.w.org/term'] ) {
			if ( this.props.data['_embedded']['https://api.w.org/term'][1] ) {
				var tagNode = [];
				var tag = this.props.data['_embedded']['https://api.w.org/term'][1];
				Object.keys( tag ).forEach( function( key ) {
					tagNode[key] = <a href={this[key]['link']} key={key}>{this[key]['name']}</a>;
				}, tag );
			}
		}
		if ( this.props.data['_embedded']['https://api.w.org/featuredmedia'] ) {
			return (
				<div className={this.props.className}>{tagNode}</div>
			)
		} else {
			return (
				<div/>
			)
		}
	}
});

module.exports = TheTags;
