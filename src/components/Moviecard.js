import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoviePoster from './Movieposter';

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
      width: '20% !important',
  
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
    movieInfo: {
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

export function MovieCard(props) {
  const classes = useStyles();

  const { movie } = props;
  const [expanded, setExpanded] = React.useState(false);
  function handleExpandClick() {
    setExpanded(!expanded);
  }



  return (
    <Paper className={classes.paperContent} elevation={2}>
    <Card>
      <CardHeader

        action={(
          <IconButton
            aria-label="settings"
            onClick={handleExpandClick}
            style={{fontSize: '17px',}}
          >
          Show synopsis
          <ExpandMoreIcon/>
          </IconButton>
                  )}>
        </CardHeader>
      <CardContent className={classes.cardContent}>
      <div className={classes.cardLeft}>
      <MoviePoster movie={movie} width={'auto'}/>
        </div>
        { expanded && (
        <div className={classes.cardRight}>
          <Grid container className={classes.movieInfo}>

            <Grid item xs={10}>
              <Grid container>

                <Grid item xs={4} className={classes.summaryLabelHeader}>Title</Grid>
                <Grid item xs={6} className={classes.summaryItem}>{movie.title}</Grid>

                <Grid item xs={4} className={classes.summaryLabelHeader}>Synopsis</Grid>
                <Grid item xs={6} className={classes.summaryItem}>{movie.synopsis}</Grid>

                <Grid item xs={4} className={classes.summaryLabelHeader}>      Release Date</Grid>
                <Grid item xs={6} className={classes.summaryItem}>{movie.releaseDate}</Grid>

              </Grid>
            </Grid>
          </Grid>
        </div>
        )
        }
      </CardContent>
    </Card>
  </Paper>
  );
}
function mapStateToProps(state) {
  return {
    moviesByRank: state.moviesByRank,
  };
}

export default (connect(mapStateToProps)(MovieCard));