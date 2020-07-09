import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { addBlog } from '../actions'
import { useDispatch } from 'react-redux'

function AddBlog({ category }) {
	let id = 22
	const dispatch = useDispatch()

	const [newBlog, setNewBlog] = useState({
		title: '',
		description: '',
		body:
			'Blabber your hearts out...<br>(If you will leave this empty we will consider this as a message instead of a blog)',
		author: '',
	})

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
					category: category,
					...newBlog,
				})
			)
		}
		setNewBlog({
			title: '',
			description: '',
			body:
				'Blabber your hearts out...<br>(If you will leave this empty we will consider this as a message instead of a blog)',
			author: '',
		})
	}

	return (
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
							required
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
							required
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
					required
				/>

				<CKEditor editor={ClassicEditor} data={newBlog.body} onChange={handleEditorChange} />

				<input type="submit" value="Submit" className="btnStyle mt-1" />
			</form>
		</div>
	)
}

export default AddBlog
