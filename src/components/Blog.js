import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteBlog } from '../actions'
import { Link } from 'react-router-dom'

function Blog({ blog, category }) {
	const dispatch = useDispatch()

	const handleDelete = (e) => {
		dispatch(deleteBlog(e.target.id))
	}

	return (
		<div className="blog-card card">
			<div>
				<h1 className="blog-title">{blog.title}</h1>
				<button className="btnDelete" onClick={handleDelete} id={blog.id}>
					X
				</button>
			</div>
			<p className="blog-description">{blog.description}</p>
			<p className="blog-author">By {blog.author}</p>
			{blog.body ? (
				<Link to={`/categories/${category}/${blog.id}`} style={linkButtonStyle}>
					<button className="btnStyle">Check it out &rarr;</button>
				</Link>
			) : (
				<p className="text-light">Note: This is just a message</p>
			)}
		</div>
	)
}

const linkButtonStyle = {
	textDecoration: 'none',
}

export default Blog
