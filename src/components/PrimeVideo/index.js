import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const filteredAction = moviesList.filter(fil => fil.categoryId === 'ACTION')
  console.log(filteredAction)
  const filteredComedy = moviesList.filter(fil => fil.categoryId === 'COMEDY')
  console.log(filteredComedy)
  return (
    <div className="prime-video-con">
      <img
        className="prime-video-img"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="action-movies-con">
        <h1 className="action-movies-heading">Action Movies</h1>
        <MoviesSlider eachMovieDetails={filteredAction} />
      </div>
      <div className="action-movies-con">
        <h1 className="action-movies-heading">Comedy Movies</h1>
        <MoviesSlider eachMovieDetails={filteredComedy} />
      </div>
    </div>
  )
}
export default PrimeVideo
