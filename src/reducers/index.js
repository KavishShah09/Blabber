import blogListReducer from './blogList'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	blogList: blogListReducer,
})

export default rootReducer
