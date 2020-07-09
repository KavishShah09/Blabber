import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import Blog from './Blog'
import AddBlog from './AddBlog'

function Category({ match }) {
	const posts = useSelector((state) => state.blogList)
	const blogs = posts.filter((post) => post.category === match.params.category)

	return (
		<div className="categoryDiv">
			<Nav />
			<div className="container">
				<h1 className="header text-light text-center"> Category: {match.params.category} </h1>
				<AddBlog category={match.params.category} />
				{blogs.map((blog) => (
					<Blog blog={blog} category={match.params.category} key={blog.id} />
				))}
			</div>
		</div>
	)
}

export default Category
