import React, { useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addBlog, deleteBlog } from '../actions'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function Category({ match }) {
	const posts = useSelector((state) => state.blogList)
	const dispatch = useDispatch()

	let id = 22
	const blogs = posts.filter((post) => post.category === match.params.category)

	const [newBlog, setNewBlog] = useState({
		title: '',
		description: '',
		body: 'Blabber your hearts out...',
		author: '',
	})

	const handleDelete = (e) => {
		dispatch(deleteBlog(e.target.id))
	}

	const handleOnChange = (e) => {
		setNewBlog({ ...newBlog, [e.target.name]: e.target.value })
	}

	const handleEditorChange = (e, editor) => {
		const data = editor.getData()
		setNewBlog({ ...newBlog, body: data })
	}

	const handleFormSubmit = (e) => {
		e.preventDefault()
		if (newBlog.title !== '' || newBlog.description !== '') {
			dispatch(
				addBlog({
					id: id++,
					category: match.params.category,
					...newBlog,
				})
			)
		}
		setNewBlog({
			title: '',
			description: '',
			body: 'Blabber your hearts out...',
			author: '',
		})
	}

	return (
		<div className="categoryDiv">
			<Nav />
			<div className="container">
				<h1 className="header text-light text-center"> Category: {match.params.category} </h1>
				<div>
					<form onSubmit={handleFormSubmit}>
						<div className="form-row">
							<div className="col">
								<input
									type="text"
									className="form-control mt-1"
									name="title"
									placeholder="Add A Title..."
									value={newBlog.title}
									onChange={handleOnChange}
								/>
							</div>
							<div className="col">
								<input
									type="text"
									className="form-control mt-1"
									name="author"
									placeholder="Your name..."
									value={newBlog.author}
									onChange={handleOnChange}
								/>
							</div>
						</div>

						<input
							type="text"
							className="form-control mt-1 mb-1"
							name="description"
							placeholder="Add A Description..."
							value={newBlog.description}
							onChange={handleOnChange}
						/>

						<CKEditor editor={ClassicEditor} data={newBlog.body} onChange={handleEditorChange} />

						<input type="submit" value="Submit" className="btnStyle mt-1" />
					</form>
				</div>
				{blogs.map((blog) => (
					<div className="blog-card card" key={blog.id}>
						<div>
							<h1 className="blog-title">{blog.title}</h1>
							<button className="btnDelete" onClick={handleDelete} id={blog.id}>
								X
							</button>
						</div>
						<p className="blog-description">{blog.description}</p>
						<p className="blog-author">By {blog.author}</p>
						<Link to={`/categories/${match.params.category}/${blog.id}`} style={linkButtonStyle}>
							<button className="btnStyle">Check it out &rarr;</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

const linkButtonStyle = {
	textDecoration: 'none',
}

export default Category
