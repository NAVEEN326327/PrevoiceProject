import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import SignUp from './SignUp';
import Home from './Home';
import Login from './Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Level from './Level';
import Navbar from './Navbar';
import Start from './Start';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
        // console.log(user.email)
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  render() {
    // {console.log(this.state.user.email)}

    return (
      <div className="App">
        
        {this.state.user ? 
        // (<Home/>) :
        (<Router>
                <div className="">
                  <Navbar/>
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/level" component={Level} />
                    <Route path="/start" component= {Start} />
                  </Switch>
                </div>
        </Router>) :

         (<Router>
          <div className="App">
            <Switch>

              <Route exact path="/" component={Login} />
              <Route path="/signUp" component={SignUp} />
            </Switch>

          </div>

        </Router>)}
      </div>
    );
  }
}


export default App;
