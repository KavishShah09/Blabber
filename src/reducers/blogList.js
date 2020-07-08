import { initialState } from './data'

const blogListReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ADD_BLOG':
			return [...state, payload]
		case 'DELETE_BLOG':
			return state.filter((blog) => blog.id !== payload)
		default:
			return state
	}
}

export default blogListReducer
