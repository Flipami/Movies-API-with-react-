import React, { Component } from 'react';
import MoviesList from '../components/movieList'
import ApiCall from '../Services/api.js'
import Loading from '../components/Loading';

class Search extends Component {
    state = {
        data: null,
        categoryByDefault: 'top_rated',
        loading: true,
    }

    loadDataTop = async () => {
        const data = await ApiCall.getMoviesListByCategory(ApiCall.top_rated);
        this.setState({data})
    }

    loadDataUp = async () => {
        const data = await ApiCall.getMoviesListByCategory(ApiCall.upcoming);
        this.setState({data})
    }

    loadDataPop = async () => {
        const data = await ApiCall.getMoviesListByCategory(ApiCall.popular);
        this.setState({data})
    }

    componentDidMount(){
        this.loadDataTop()
        console.log(this.state.data)
    }
    render() {
        return (
            <div>
                <button onClick={this.loadDataTop}>Top Rated</button>
                <button onClick={this.loadDataUp}>Upcoming</button>
                <button onClick={this.loadDataPop}>Popular</button>
                {!this.state.data ? <Loading /> : <MoviesList arrMovies={this.state.data.results} />}
            </div>
        );
    }
}

export default Search;