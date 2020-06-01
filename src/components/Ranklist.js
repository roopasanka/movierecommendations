import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import MovieCard from './Moviecard';

const useStyles = makeStyles((theme) => ({

  root: {
    width: '100%',
    height: 'auto',
    display: 'block',
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

export function RankList(props) {
  const classes = useStyles();

  const { movieList, id } = props;

  return (
    <div className={classes.root}>
    {!id && (
      movieList && movieList.map((movie, index) => (
        <MovieCard
          movie={movie}
        />
      )) )}
    {id && (
        <MovieCard
          movie={movieList[id-1]}
        />
       )}

    </div>
  );
}

export default RankList;