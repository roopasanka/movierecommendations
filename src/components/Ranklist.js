import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from './Moviecard';

const useStyles = makeStyles((theme) => ({

  root: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  }));

export function RankList(props) {
  const classes = useStyles();

  const { movieList, id } = props;

  return (
    <div className={classes.root}>
    {!id && (
      movieList && movieList.map((movie) => (
        <MovieCard
          movie={movie}
          key={id}
        />
      )) )}
    {id<=4 ? (
        <MovieCard
          movie={movieList[id-1]}
          key={id}
        />
       ):(<div>Please select from range 1-5</div>)}

    </div>
  );
}

export default RankList;