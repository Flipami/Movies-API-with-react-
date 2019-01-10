import React, { Component } from 'react';
import MovieCard from '../MovieListItem';

class MovieList extends Component {
    render() {
        const { arrMovies} = this.props;
        return (
            <div>
                {arrMovies.map( movie => <MovieCard key={movie.id} movie={movie} /> )}
            </div>
        );
    }
}

export default MovieList;