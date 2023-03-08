import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../styles/Movie.css'

function Movie({genres,id,poster,summary,title,year}) {
  return (
    <div className='movie'>
      <Link to={'/detail'} state={{genres,id,poster,summary,title,year}}>
      <img src={poster} alt={title} title={title} />
      <div className='movie_data'>
        <h3 className='movie_title' style={{backgroundColor:'#eee'}}>{title}</h3>
        <h4 className='movie_year'>{year}</h4>
        <ul className='movie_genres'>
          {genres.map((genre, index) => {
            <li className='movie_genre' key={index}>{genre}</li>
          })}
          </ul>
        <p className='movie_summary'>{summary.slice(0,180)} ...</p>
      </div>
      </Link>
    </div>
  )
}



//npm install prop-types
Movie.propTypes = {
  genres : PropTypes.arrayOf(PropTypes).isRequired,
  id : PropTypes.number.isRequired,
  poster : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
}

export default Movie