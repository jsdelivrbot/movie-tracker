import axios from 'axios';

const ROOT_URL = `https://api.themoviedb.org/3/discover/movie?primary_release_year=2018&sort_by=vote_average.desc&api_key=`;
const API_KEY = 'ec7b4f384800dc39da73a1323117034d';

const UPDATE_RECENT_MOVIES = 'UPDATE_RECENT_MOVIES';

export const fetchRecentMovies = async () => {
  const response = await axios.get(`${ROOT_URL}${API_KEY}`);
  return {
    type: UPDATE_RECENT_MOVIES,
    payload: response.data
  };
};
