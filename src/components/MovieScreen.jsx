import MovieCard from "./MovirCard"

const MovieScreen = ({movieList, page, setPage, list}) => {
    const movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie}/>
    })

    return(
        <div className="page">
            <h1>Griffin's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen