import React from 'react'
import { render } from 'react-dom'

const HavePosts = require('./posts/havePosts.jsx');
const Title = require('./posts/theTItle.jsx');
var wpQuery = {
	post_type: 'post',
	per_page: 5,
	filter: {
		orderby: 'date',
		order: 'DESC'
	}
};
var dummy = 'a';

render((
  	<HavePosts
		apiRoot="http://api.wp-app.org/wp-json/"
		apiType='wp/v2/posts'
		query={wpQuery}
		className='sample post'
	>
		<Title className='sample title'/>
		<Title className='sample title'/>
	</HavePosts>
), document.getElementById('app'))
