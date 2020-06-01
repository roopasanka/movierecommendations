import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RankList from './Ranklist';
import PosterView from './Posterview';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    width: '100%',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginLeft: '350px',
    marginBottom: '30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  formstyle: {
    variant: 'outlined',
    padding: '30px 30px',
    marginLeft: '650px',

  },
  }));


function MainComponent(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {moviesByRank, moviesByRelease, moviesByList, match} = props;
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div data-testid="maincomponent-div">
    {!match.params.id

      && (<div>
      <FormControl component="fieldset">
        <FormLabel component="legend"className={classes.formstyle}>Order By</FormLabel>
          <RadioGroup aria-label="Order By" name="Order List" value={value} className={classes.root} onChange={handleChange}>
              <FormControlLabel value="Rank" control={<Radio />} label="Rank" />
              <FormControlLabel value="Release Date" control={<Radio />} label="Release Date" />
          </RadioGroup>
      </FormControl>
      {
        !value && (
          <PosterView movieList={moviesByList}/>
        )
      }
      {value === 'Rank'
            && (
  
            <RankList key="MoviesByrank" id={match.params.id} movieList={moviesByRank}/>)}
      {value === 'Release Date'
            && (
  
            <RankList key="MoviesByrelease" id={match.params.id} movieList={moviesByRelease}/>)}
            </div>)}
  {match.params.id
  && (<RankList id={match.params.id}movieList={moviesByRank}/>)
  }
  </div>
  );
}
function mapStateToProps(state) {
  return {
    moviesByRank: state.moviesByRank,
    moviesByRelease: state.moviesByRelease,
    moviesByList: state.moviesByList,
  };
}

export default (connect(mapStateToProps)(MainComponent));