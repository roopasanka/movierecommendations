import movies from '../json/top5MoviesAssessement.json';
import * as types from './ActionTypes';

export function getMoviesByRank(){
const rankArray = [];
movies.components.map((eachElement)=>{
    if(eachElement.type === "movie-list"){
        eachElement.items.map((eachItem) =>{
            rankArray[eachItem.rank -1] = eachItem;
        });
    }
});
return rankArray;
}

export function getMoviesByRelease(){
    let releaseArray = [];
    movies.components.map((eachElement)=>{
        if(eachElement.type === "movie-list"){
            releaseArray = eachElement.items;
            releaseArray.sort((movie, nextMovie)=>{
                return movie.releaseDate - nextMovie.releaseDate;
            });
        }
    });
    return releaseArray;
}
export function getMovieList(){
    let movieList = [];
    movies.components.map((eachElement)=>{
        if(eachElement.type === "movie-list"){
            movieList = eachElement.items;
        }
    });
    return movieList;
}
export function setMoviesByRank(data) {
    return async (dispatch) => {
      dispatch({
        type: types.RANK_ACTION,
        data,
      });
    };
}
export function setMoviesByRelease(data) {
    return async (dispatch) => {
      dispatch({
        type: types.RELEASE_ACTION,
        data,
      });
    };
}