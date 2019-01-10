import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import ApiCall from '../../Services/api'
import Details from '../../Pages/Details';


class MovieCard extends Component {
    static rootUrl = 'https://image.tmdb.org/t/p/'
    static fileSize = [w300, h200]

    loadDataDetail = async () => {
        const data = await ApiCall.getMoviesItems(this.props.title);
        this.setState({data})
    }

    static async getPoster(poster_path){
        try{
            const posterCall = await axios.get(`${this.rootUrl}/w500/${poster_path}`)
            return posterCall.data;
        } 
        catch(error){

        }
    }

    render() {
        const { movie }= this.props
        const {title,overview, adult, vote_average, poster_path} = movie

        return (
            <div className="movie_card">
            
                <Link to={this.loadDataDetail}>
                    <div className="poster"><img src={poster_path} alt="poster"></img></div>
                    <div onClick={this.loadDataDetail} className="title"><h2>{title}</h2></div>
                </Link>
                <p className="vote_average"><strong>Average: {vote_average}</strong></p>
                <p className="adult"><strong>Category: {adult}</strong></p>
                <h6 className="overview">Description: {overview}</h6>
            </div>
        );
    }
}

export default MovieCard;
// <div className={`favourite-button ${isFavourite && 'favourite-button-selected' }` } onClick={()=> {saveFavourite(fullBeer.id);}}></div>
//<a href="<Details/>" className="poster_path"><img src={poster_path} className="poster" alt="poster"></img></a>
//<a href="<Details/>" onClick={this.loadDataDetail}className="title">{title}</a>
//<img src={posterView} className="poster" alt="poster"/>
//<img class="poster" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/wJhqsBTBrWHcuLfU5kHF4Ar4HOL.jpg" srcset="https://image.tmdb.org/t/p/w300_and_h450_bestv2/wJhqsBTBrWHcuLfU5kHF4Ar4HOL.jpg 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/wJhqsBTBrWHcuLfU5kHF4Ar4HOL.jpg 2x" alt="Aquaman"></img>
//<img class="poster fade lazyautosizes lazyloaded" data-sizes="auto" data-src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/qd3miOf7LXzyZ4oQiu22BcHGiXT.jpg" data-srcset="https://image.tmdb.org/t/p/w185_and_h278_bestv2/qd3miOf7LXzyZ4oQiu22BcHGiXT.jpg 1x, https://image.tmdb.org/t/p/w370_and_h556_bestv2/qd3miOf7LXzyZ4oQiu22BcHGiXT.jpg 2x" alt="La princesa Mononoke" sizes="166px" srcset="https://image.tmdb.org/t/p/w185_and_h278_bestv2/qd3miOf7LXzyZ4oQiu22BcHGiXT.jpg 1x, https://image.tmdb.org/t/p/w370_and_h556_bestv2/qd3miOf7LXzyZ4oQiu22BcHGiXT.jpg 2x" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/qd3miOf7LXzyZ4oQiu22BcHGiXT.jpg"></img>
/*{
    "vote_count": 1708,
    "id": 297802,
    "video": false,
    "vote_average": 6.9,
    "title": "Aquaman",
    "popularity": 602.827,
    "poster_path": "/i2dF9UxOeb77CAJrOflj0RpqJRF.jpg",
    "original_language": "en",
    "original_title": "Aquaman",
    "genre_ids": [
      28,
      14,
      878,
      12
    ],
    "backdrop_path": "/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg",
    "adult": false,
    "overview": "Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.",
    "release_date": "2018-12-07"
  }*/