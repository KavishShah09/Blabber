import React from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Categories from './components/Categories'
import Category from './components/Category'
import BlogDetail from './components/BlogDetail'

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/categories" component={Categories} />
					<Route exact path="/categories/:category" component={Category} />
					<Route path="/categories/:category/:id" component={BlogDetail} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
