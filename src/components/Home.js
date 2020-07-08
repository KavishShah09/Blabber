import React from 'react'

function Home() {
	return (
		<div className="wrapJumbotron">
			<div className="jumbotron">
				<h1 className="display-4">
					Welcome To <strong>Blabber</strong>
				</h1>
				<p className="lead">This is a simple Blog App made as a task for MAD Club TSEC</p>
				<hr className="my-4" />
				<p>
					Click on Explore to begin and <strong>Blabber</strong> your hearts out!
				</p>
				<a className="btn btn-primary btn-lg" href="/categories" role="button">
					Explore
				</a>
			</div>
		</div>
	)
}

export default Home
