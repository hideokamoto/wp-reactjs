import React from 'react'
import { render } from 'react-dom'

var TheCategories = React.createClass({
	render: function() {
		if ( this.props.data['_embedded']['https://api.w.org/term'] ) {
			if ( this.props.data['_embedded']['https://api.w.org/term'][0] ) {
				var catNode = [];
				var cat = this.props.data['_embedded']['https://api.w.org/term'][0];
				Object.keys( cat ).forEach( function( key ) {
					catNode[key] = <a href={this[key]['link']} key={key}>{this[key]['name']}</a>;
				}, cat );
			}
			return (
				<div className={this.props.className}>{catNode}</div>
			)
		} else {
			return (
				<div/>
			)
		}
	}
});

module.exports = TheCategories;
