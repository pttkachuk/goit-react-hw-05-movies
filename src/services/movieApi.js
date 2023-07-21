import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'dcb3d5f5ec0882fd865db2c87bebab4d';

//TRENDING MOVIE REQUEST
export const requestTrandingMovies = async () => {
    const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
    return data.results;
};

//SEARCH MOVIE REQUEST
export const requestMoviesByName = async () => {
    const { data } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`);
    return data;
};

//MOVIE DETAILS REQUEST
export const requestMovieById = async movieId => {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
};

//MOVIE CAST REQUEST
export const requestMovieCredits = async movieId => {
    const { data } = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return data.cast;
};

//MOVIE REVIEW REQUEST
export const requestMovieReview = async movieId => {
    const { data } = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return data.results;
};