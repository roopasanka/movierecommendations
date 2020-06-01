import {getMoviesByRank, getMoviesByRelease, getMovieList} from '../actions/ActionCreator'

const moviesByRank = getMoviesByRank();
const moviesByRelease = getMoviesByRelease();
const moviesByList = getMovieList();
export const initialState = {
    moviesByRank: moviesByRank,
    moviesByRelease: moviesByRelease,
    moviesByList: moviesByList,
}