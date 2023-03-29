import React from 'react';

const SingleMovie = ({handleWatchTime,movie }) => {
	// console.log(props);
// 	const { movieName, watchTime, description, poster, imdbRating
//  } = props.movie;
	return (
		<div className='col-md-6 '>
			<div className="movie-card card">
				<div className="poster w-25 m-auto">
					<img className='w-75' src={movie.poster} alt="" />
				</div>
				<h4 className='m-auto'>{movie.movieName}</h4>
				<p className='m-auto'>{movie.description}</p>
				<div className='d-flex justify-content-around'>
					<p>Watch Time:{movie.watchTime}</p>
					<p>Ratings:{movie.imdbRating}</p>
				</div>
				<button onClick={()=>handleWatchTime(movie.watchTime)} className='btn btn-info w-75 m-auto'>Book Now</button>
			</div>
		</div>
	);
};

export default SingleMovie;