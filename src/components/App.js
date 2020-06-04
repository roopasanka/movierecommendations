import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MainComponent from './MainComponent';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: '0px',
    width: 'auto',
    maxHeight: 'auto',
    marginBottom: '1%',
    textAlign: 'center',
    color: 'black',
    fontsize: '',
    fontfamily: 'Roboto',
  },
  paper: {
    padding: theme.spacing(5, 2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}));
// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';
  function getSize() {
    return {
      width: isClient ? +window.screen.availWidth : null,
      height: isClient ? +window.screen.availHeight : null,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return windowSize;
}


function App(){
  const classes = useStyles();
  const { width, height } = useWindowSize();
  return (
    <Provider store={store}>
        <Paper style={{
            width: {width},
            height: {height}
          }}
          data-testid='app'>
    <Grid data-testid="notice-div" className="content">
          <Paper className={classes.paper}>
            <Typography variant="h5" component="p">
              Movie Recommendations
            </Typography>
          </Paper>
      </Grid>
    <Router>
    <Switch>

<Route
  exact
  path="/"
  render={(props) => (
    <MainComponent
      match={props.match}
      location={props.location}
      history={props.history}
    />
  )}
/>
<Route
  exact
  path="/:id"
  render={(props) => (
    <MainComponent
      match={props.match}
      location={props.location}
      history={props.history}
    />
  )}
/>


</Switch>
</Router>
    </Paper>
    </Provider>
  );
}

export default App;
