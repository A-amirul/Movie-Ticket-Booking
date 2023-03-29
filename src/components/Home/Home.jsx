import React, { useEffect, useState } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';

const Home = ({ handleWatchTime }) => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		fetch('data.json')
			.then(res => res.json())
			.then(data => setMovies(data))
	
	}, []);

	return (
		<div>
			<div className='movie-container row'>
				{
					movies.map(movie => <SingleMovie
						handleWatchTime={handleWatchTime}
						movie={movie} key={movie.movieName}
					></SingleMovie>)
				}
				</div>

		</div>
	);
};

export default Home;