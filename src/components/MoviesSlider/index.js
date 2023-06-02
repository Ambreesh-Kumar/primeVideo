// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieList} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider_container">
      <Slider {...settings}>
        <div>
          {movieList.map(eachMovie => (
            <MovieItem movieObject={eachMovie} key={eachMovie.id} />
          ))}
        </div>
      </Slider>
    </div>
  )
}
export default MoviesSlider
