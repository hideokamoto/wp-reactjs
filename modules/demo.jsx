//Import React & React DOM
import React from 'react'
import { render } from 'react-dom'

//Import React Components
const HavePosts        = require('./posts/havePosts.jsx');
const TheTitle         = require('./posts/theTitle.jsx');
const TheContent       = require('./posts/theContent.jsx');
const TheExcerpt       = require('./posts/theExcerpt.jsx');
const ThePostThumbnail = require('./posts/thePostThumbnail.jsx');
const TheId            = require('./posts/theId.jsx');
const TheDate          = require('./posts/theDate.jsx');
const TheCategories    = require('./posts/theCategories.jsx');
const TheTags          = require('./posts/theTags.jsx');
const TheAuthor        = require('./posts/theAuthor.jsx');

//Demo1
var Demo1 = React.createClass({
	render: function() {
		//WP Query
		var wpQuery = {
			post_type: 'post',
			per_page: 20,
		};
		return (
		  	<HavePosts
				apiRoot="http://api.wp-app.org/wp-json/"
				apiType='wp/v2/posts'
				query={wpQuery}
				className='post'
				rowClassName='demo-1 postList'
			>
				<TheTitle className='title page-header'/>
				<TheAuthor className='author'/>
				<TheDate className='date'/>
				<TheTags className="tag" />
				<TheCategories className="cat" />
				<ThePostThumbnail className='thumb'/>
				<TheExcerpt className='excerpt'/>
			</HavePosts>
		)
	}
});

//Demo2
var Demo2 = React.createClass({
	render: function() {
		//WP Query
		var wpQuery = {
			post_type: 'post',
			per_page: 5
		};
		return (
		  	<HavePosts
				apiRoot="http://api.wp-app.org/wp-json/"
				apiType='wp/v2/posts'
				query={wpQuery}
				className=' post'
				rowClassName='demo-2 postList'
			>
				<TheTitle className='page-header title'/>
				<TheDate className=' date'/>
				<ThePostThumbnail className=' thumb'/>
				<TheId className=' id'/>
				<TheContent className=' content'/>
			</HavePosts>
		)
	}
});

//Style
var containerStyle = {
	display: 'flex',
	flexDirection:  'column',
};
var rowStyle = {
	backgroundColor: '#f5f5f5',
	borderBottom: '1px solid #666',
	padding: '20px 5px',
};

//Render Scripts
render((
	<div className="container" style={containerStyle}>
		<div className="toc row" style={rowStyle}>
			<h1 id="demo1">Table of Demo Content</h1>
			<ul>
				<li><a href="#demo1">demo1:Simple Post List( Excerpt )</a></li>
				<li><a href="#demo2">demo2:Simple Post List( All Content )</a></li>
			</ul>
		</div>
		<div className="demo1 row" style={rowStyle}>
			<h1 id="demo1">Simple Post List( Excerpt )</h1>
  			<Demo1 />
		</div>
		<div className="demo2 row" style={rowStyle}>
			<h1 id="demo2">Simple Post List( All Content )</h1>
			<Demo2 />
		</div>
	</div>
), document.getElementById('app'))
