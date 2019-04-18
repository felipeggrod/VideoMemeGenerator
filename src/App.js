import React, { Component } from "react";
import injectSheet from "react-jss";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {toggleTitleColor} from './store';

import Readme from './components/Readme';
import Editor from './components/Editor';



const styles = theme => ({
  '@global body': {
    background: theme.palette.background,
    color: theme.palette.text
  },
  App: {
    padding: '20px',
    background: 'black',
    maxWidth: '800px',
    minHeight: '600px',
    margin: 'auto',
    '&  h1': {
      fontSize: '5rem',
      textAlign: 'center',
      fontFamily: 'serif',
      cursor: 'pointer'
    },
    '& input': {
      margin: '10px'
    },
    '& a': {
      color: theme.palette.text,
    }
  },
  'title-primary': {
    color: theme.palette.primary
  },
  'title-secondary': {
    color: theme.palette.secondary
  },
  
});

const stp = (state) => ({
  titleColor: state.memeState.titleColor
})

const dtp = (dispatch) => bindActionCreators( {
  toggleTitleColor: () => toggleTitleColor()
}, dispatch)

class App extends Component {
  render() {
    const { classes, titleColor, toggleTitleColor } = this.props;
    return (
      <div className={classes.App}>
        <header className="App-header">
          <h1 onClick={toggleTitleColor} className={ classes[`title-${titleColor}`] }>Vintage Meme Machine</h1>
        </header>
        <main>
          <Switch>
            <Route path="/home">
              <Editor/>
            </Route>
            <Route path="/readme">
              <Readme/>
            </Route>
            <Redirect to="/home" />
          </Switch>
        </main>
        <footer>
          <nav>
            <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/readme">Readme</Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
}

export default connect(stp,dtp)(injectSheet(styles)(App));
