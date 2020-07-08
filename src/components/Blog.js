import React from 'react'
import { useSelector } from 'react-redux'
import Nav from './Nav'

function Blog({ match }) {
	const posts = useSelector((state) => state.blogList)
	const blog = posts.filter((post) => post.id === +match.params.id)[0]
	return (
		<div className="blogDiv">
			<Nav />
			<div className="container">
				<div className="blog-card card">
					<div className="text-center">
						<h1 className="blog-title">{blog.title}</h1>
					</div>
					<p className="blog-body mt-3" dangerouslySetInnerHTML={{ __html: blog.body }} />
					<p className="blog-author">By {blog.author}</p>
				</div>
			</div>
		</div>
	)
}

export default Blog
