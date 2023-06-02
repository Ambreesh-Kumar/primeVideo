// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieObject} = props
  const {id, thumbnailUrl, videoUrl, categoryId} = movieObject

  return (
    <div>
      <img src={thumbnailUrl} alt="" />
    </div>
  )
}

export default MovieItem
