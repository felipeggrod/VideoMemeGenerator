import React, { Component } from "react";
import injectSheet from "react-jss";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { styles } from './styles.js'

import Readme from './components/Readme';
import Editor from './components/Editor';


const stp = (state) => ({
  titleColor: state.memeState.titleColor
})

const dtp = (dispatch) => bindActionCreators( {
}, dispatch)

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="row my-2">
          <div className="col-12 m-4">
            <h1 className="text-primary text-center">Vintage Meme Machine</h1>
          </div>
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
          <nav className="border-top" >
            <ul className="nav justify-content-center">
            <li className="nav-item nav-link"><Link to="/home">Home</Link></li>
            <li className="nav-item nav-link"><Link to="/readme">Readme</Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
}

export default connect(stp,dtp)(injectSheet(styles)(App));
