import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import SignUp from './SignUp';
import Home from './Home';
import Login from './Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <Switch>

              <Route exact path="/" component={Login} />
              <Route path="/SignUp" component={SignUp} />
            </Switch>

          </div>

        </Router>

        {/* {this.state.user ? (<Home/>) : (<Login/>)} */}
      </div>
    );
  }
}


export default App;
