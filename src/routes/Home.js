import axios from 'axios';
import React, { Component } from 'react'
import Movie from '../components/Movie.js';
import '../styles/Home.css';
export class Home extends Component {
state = {
  isLoading : true,
  movies : [],
}
componentDidMount(){
  // setTimeout(()=>{
  //   this.setState({isLoading:false});
  // },6000);
  this.getMovies();
}
getMovies = async() => {
  const {
    data : {
      data : {
        movies
      }
    }
  }=
  await axios.get('https://yts.mx/api/v2/list_movies.json?genre=animation&sort_by=like_count');
  console.log(movies);
  this.setState({
    isLoading : false,
    movies// movies : movies,
  })
}
  render() {
    const {isLoading,movies} = this.state;//구조 분해 할당
    return (
        <section className='container'>
          {isLoading?
          <div className='loader'>
            <span className='loader_text'>'Loading....'</span>
          </div>
          :
          <div className='movies'>
            {movies.map((movie, index) => <Movie
                                              key={index}
                                              id={movie.id}
                                              year={movie.year}
                                              title={movie.title}
                                              summary={movie.summary}
                                              poster={movie.medium_cover_image}
                                              genres={movie.genres}
                                          />
                        )
            }
          </div>
           }
        </section>
    )
  }
}
export default Home;