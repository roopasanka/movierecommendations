import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';

const useStyles = makeStyles(() => ({

  root: {
    width: '100%',
    height: 'auto',
    marginLeft: '10px'
  },
  }));

export function PosterView(props) {
  const classes = useStyles();

  const { movieList } = props;


  return (
    <div className={classes.root}>
      {movieList && movieList.map((movie) => (
        <img
          key={movie.rank}
          src={movie.imageUrl}
          style={{
            marginLeft: '10'
          }}
          alt=" "
        />
      ))}
    </div>
  );
}

export default PosterView;