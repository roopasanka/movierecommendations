import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import MovieCard from './Moviecard';
import MoviePoster from './Movieposter';

const useStyles = makeStyles((theme) => ({

  root: {
    width: '100%',
    height: 'auto',
    // display: 'block',
    marginLeft: '10px'
  },
    cardContent: {
      width: '100%',
      height: 'auto',
      display: 'flex',
    },
    cardLeft: {
      width: '20%',
  
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      background: '#f5f5f5',
      marginTop: '4px',
      border: '#ccc',
    },
    cardRight: {
      flexGrow: 1,
    },
    paperContent: {
      marginBottom: '4px',
    },
    media: {
      objectFit: 'none',
      width: 'auto',
    },
    deviceInfo: {
      flex: 'none',
    },
    summaryLabel: {
      textAlign: 'left',
      fontWeight: 'bold',
    },
    summaryLabelHeader: {
      textAlign: 'right',
      fontSize: '17px',
      color: '#555',
    },
    summaryItem: {
      textAlign: 'left',
      paddingLeft: '12px',
    },
  }));

export function PosterView(props) {
  const classes = useStyles();

  const { movieList } = props;


  return (
    <div className={classes.root}>
      {movieList && movieList.map((movie, index) => (
        <img
          src={movie.imageUrl}
          style={{
            marginLeft: '10'
          }}
        />
      ))}
    </div>
  );
}

export default PosterView;