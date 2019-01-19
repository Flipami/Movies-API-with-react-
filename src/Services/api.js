import axios from 'axios';

class ApiCall {

    static upcoming = 'upcoming'
    static popular = 'popular'
    static top_rated = 'top_rated'
    static now_playing = 'now_playing'

    static basePathUrl='https:api.themoviedb.org/'
    static apiKey = 'c24291ee0bd7a8f5ed6763bbd74b5fea';
    
    static async getMoviesListByCategory(category){
        try{
            const categoryCall = await axios.get(`${this.basePathUrl}3/movie/${category}?api_key=${this.apiKey}&language=en-US&page=1`)
            return categoryCall.data;
        } 
        catch(error){

        }
    }

    static async getMoviesDetails(id){
        try{

            const idCall = await axios.get(`${this.basePathUrl}3/movie/${id}?api_key=${this.apiKey}`)
            console.log(idCall)
            return idCall.data;
        } 
        catch(error){

        }
    }
}

export default ApiCall;