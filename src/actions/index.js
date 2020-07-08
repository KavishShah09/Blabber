export const addBlog = (blog) => ({
	type: 'ADD_BLOG',
	payload: blog,
})

export const deleteBlog = (id) => ({
	type: 'DELETE_BLOG',
	payload: id,
})
