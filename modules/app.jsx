import React from 'react'
import { render } from 'react-dom'

const HavePosts = require('./posts/havePosts.jsx');
var wpQuery = {
	post_type: 'post',
	per_page: 5,
	filter: {
		orderby: 'date',
		order: 'DESC'
	}
};

render((
  	<HavePosts
		apiRoot="http://api.wp-app.org/wp-json/"
		apiType='wp/v2/posts'
		query={wpQuery}
	>
	</HavePosts>
), document.getElementById('app'))
