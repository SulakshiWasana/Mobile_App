import axios, {options} from 'axios';
import {apiKey} from "../constants";

/* Endpoints */
const baseUrl = 'https://api.themoviedb.org/3';

const trendingMovieEndpoint = `${baseUrl}/trending/movie/day?api_key=${apiKey}`
const upComingMovieEndpoint = `${baseUrl}/movie/upcoming/?api_key=${apiKey}`
const topRatedMoviesEndPoint = `${baseUrl}/movie/top_rated?api_key=${apiKey}`


export const image500 = path => path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const image342 = path => path ? `https://image.tmdb.org/t/p/w342/${path}` : null;
export const image185 = path => path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    }

    try {
        const response = await axios.request(options)
        return response.data;
    } catch (e) {
        console.log('ERROR', e)
        return {}
    }
}


export const fetchTrendingMovies = () => {
    return apiCall(trendingMovieEndpoint);
}
export const fetchUpComingMovies = () => {
    return apiCall(upComingMovieEndpoint);
}
export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndPoint);
}
