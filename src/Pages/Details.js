import React, { Component } from 'react';
import { withRouter } from 'react-router';
import MovieListItem from '../components/MovieListItem'
import ApiCall from '../Services/api.js'
import Loading from '../components/Loading';

class Details extends Component {
    state = {
        movie: { },
        loading: false,
    }

    loadDataDetail = async () => {
        const movie = await ApiCall.getMoviesItems(this.props.match.params.idMovie);
        this.setState({movie, loading: true})
    }

    componentDidMount(){
        this.loadDataDetail()
    }
    render() {
        return (
            <div>
                {!this.state.data ? <Loading /> : <MovieListItem movie={this.state.data.results} />}
            </div>
        );
    }
}

export default Details;