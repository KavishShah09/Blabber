import React, { useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function Category({ match }) {
	let id = 22
	const [posts] = useState([
		{
			category: 'Anime',
			id: 1,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Anime',
			id: 2,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Anime',
			id: 3,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Basketball',
			id: 4,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Basketball',
			id: 5,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Cricket',
			id: 6,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Failure',
			id: 7,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Failure',
			id: 8,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Games',
			id: 9,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Habits',
			id: 10,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Habits',
			id: 11,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Internet',
			id: 12,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Internet',
			id: 13,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Internet',
			id: 14,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Karaoke',
			id: 15,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Nintendo',
			id: 16,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Unity',
			id: 17,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Unity',
			id: 18,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Vue',
			id: 19,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Vue',
			id: 20,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
		{
			category: 'Yemen',
			id: 21,
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iure accusantium? Deserunt vitae commodi illum veniam, nisi similique accusamus. Minima vero quod sed voluptatibus beatae iste eaque facilis nisi?',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos commodi magni voluptatibus unde optio nulla eum perferendis libero est dolor nam, repellat dolorem veritatis assumenda maiores dolorum? Vitae laboriosam magnam fugit, necessitatibus harum voluptas asperiores magni aut sed vel. Quas tempora provident ab laudantium enim consequuntur optio inventore culpa reiciendis deserunt quasi, aperiam saepe alias rerum delectus, harum eligendi dignissimos dolores quia? Deleniti at sapiente repellendus sit, pariatur, quos optio deserunt odio, dolorem est voluptatum explicabo delectus accusamus officiis quo repellat quia odit praesentium fuga asperiores eos? Consequatur expedita delectus veritatis aperiam corrupti aliquam dolore sequi necessitatibus sed cupiditate!',
			author: 'John Doe',
		},
	])

	const [blogs, setBlogs] = useState(posts.filter((post) => post.category === match.params.category))
	const [newBlog, setNewBlog] = useState({
		category: match.params.category,
		title: '',
		description: '',
		body: 'Blabber your hearts out...',
		author: '',
	})

	const handleDelete = (e) => {
		setBlogs(blogs.filter((blog) => blog.id !== +e.target.id))
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
		setBlogs([...blogs, { ...newBlog, id: id++ }])
	}

	return (
		<div className="categoryDiv">
			<Nav />
			<div className="container">
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
