import React, { Component } from 'react';
import MoviesList from '../components/movieList'
import ApiCall from '../Services/api.js'
import Loading from '../components/Loading';

class Home extends Component {
    state = {
        data: null,
        loading: true,
    }

    loadData = async () => {
        const data = await ApiCall.getMoviesListByCategory(ApiCall.now_playing);
        this.setState({data})
    }

    componentDidMount(){
        this.loadData()
    }

    render() {
        return (
            <div>
                {!this.state.data ? <Loading /> : <MoviesList arrMovies={this.state.data.results} />}
            </div>
        );
    }
}

export default Home;