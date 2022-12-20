const MovieCard = ({movie}) => {
    return(
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                <h3>{movie.original_title}</h3>
            </div>
            <button>Add to list</button>
        </div>
    )
}

export default MovieCard