import React from 'react'
import { render } from 'react-dom'

const HavePosts = require('./posts/havePosts.jsx');
const TheTitle = require('./posts/theTitle.jsx');
const TheContent = require('./posts/theContent.jsx');
const TheExcerpt = require('./posts/theExcerpt.jsx');
const ThePostThumbnail = require('./posts/thePostThumbnail.jsx');
const TheId = require('./posts/theId.jsx');
const TheDate = require('./posts/theDate.jsx');
var wpQuery = {
	post_type: 'post',
	per_page: 10,
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
		className='sample post'
		rowClassName='sample postList'
	>
		<TheTitle className='sample title'/>
		<TheDate className='sample date'/>
		<ThePostThumbnail className='sample thumb'/>
		<TheId className='sample id'/>
		<TheExcerpt className='sample excerpt'/>
		<TheContent className='sample content'/>
	</HavePosts>
), document.getElementById('app'))
