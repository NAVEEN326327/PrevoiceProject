
import React, { Component } from "react";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";



class Home extends Component {

    constructor(props){
        super(props);
        this.state={
          email: "",
          password: ""
        }
    }

    logout() {
        fire.auth().signOut();
    }
        render() {
            return(
                <div>
                 <h1>Home page</h1>
                 <button onClick={this.logout} className="btn btn-success"> Logout</button>
                </div>
            )
        }
}


export default Home;