import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Categories() {
	let id = 0
	const [categories] = useState([
		'Anime',
		'Basketball',
		'Cricket',
		'Failure',
		'Games',
		'Habits',
		'Internet',
		'Karaoke',
		'Nintendo',
		'Unity',
		'Vue',
		'Yemen',
	])

	return (
		<div className="card-deck">
			<div className="container">
				<h1 className="categoryHeader">Click On A Category You Want To Blabber About!</h1>
				<div className="row row-cols-1 row-cols-md-3">
					{categories.map((category) => (
						<Link to={`/categories/${category}`} key={id++}>
							<div className="category card col">{category}</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Categories
