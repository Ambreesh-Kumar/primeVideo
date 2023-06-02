// Write your code here
import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {initialMovieList: props.moviesList}
  }

  render() {
    const {initialMovieList} = this.state
    const actionMovies = initialMovieList.filter(
      eachItem => eachItem.categoryId === 'ACTION',
    )
    const comedyMovies = initialMovieList.filter(
      eachItem => eachItem.categoryId === 'COMEDY',
    )
    return (
      <div className="prime_video_container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            className="prime_video_logo"
          />
          <div className="action-movies-container">
            <h1 className="action-movies-heading">Action Movies</h1>
            <div className="movie-container">
              <MoviesSlider movieList={actionMovies} />
            </div>
          </div>

          <div className="action-movies-container">
            <h1 className="action-movies-heading">Comedy Movies</h1>
            <div className="movie-container">
              <MoviesSlider movieList={comedyMovies} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
