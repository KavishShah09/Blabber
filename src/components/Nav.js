import React from 'react'

function Nav() {
	return (
		<div>
			<nav className="navbar navbar-dark">
				<a className="navbar-brand" href="/">
					Blabber
				</a>
				<a className="nav-link ml-auto" href="/">
					Home
				</a>
				<a className="nav-link" href="/categories">
					Categories
				</a>
			</nav>
		</div>
	)
}

export default Nav
