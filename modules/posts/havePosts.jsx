import React from 'react'
import { render } from 'react-dom'

const HavePosts = React.createClass({
	getDefaultProps: function() {
		return {
			apiType: 'wp/v2/posts',
			query: '',
			apiRoot: ''
		}
	},
	getInitialState: function() {
		return {
			data: []
		};
	},
	getQuery: function() {
		var query = this.props.apiType + '?_embed&';
		var i = 0;
		Object.keys( this.props.query ).forEach( function( key ) {
			i++;
			var q = '';
			if ( 'filter' == key ) {
				Object.keys( this[key] ).forEach( function( k ) {
					var filterQuery = "filter[" + k + ']=' + this[k] + '&';
					q += filterQuery;
				}, this[key] );
			} else {
				q =  key + '=' + this[key] + '&';
			}
			query += q;
		}, this.props.query );
		return query;
	},
	loadPostsFromServer: function() {
		var api = this.props.apiRoot + this.getQuery();
		$.ajax({
			type: "GET",
			url: api,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	componentDidMount: function() {
		this.loadPostsFromServer();
	},
	render: function() {
	console.log(this.state.data);
		return(
			<div>aaa
			</div>
		);
	}
});

module.exports = HavePosts;
