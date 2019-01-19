import React, { Component } from 'react';
import { withRouter } from 'react-router';
import MovieListItem from '../components/MovieListItem'
import ApiCall from '../Services/api.js'
import Loading from '../components/Loading';
import MovieCard from '../components/MovieListItem';

class Details extends Component {
    state = {
        movie: null,
        loading: false,
    }

    loadDataDetail = async () => {
        console.log(this)
        const movie = await ApiCall.getMoviesDetails(this.props.match.params.id);
        this.setState({movie, loading: true})
    }

    componentDidMount(){
        this.loadDataDetail()
    }
    render() {

        return (
            <div>
                {!this.state.movie ? <Loading /> : <MovieCard movie={this.state.movie} />}
            </div>
        );
    }
}

export default Details;