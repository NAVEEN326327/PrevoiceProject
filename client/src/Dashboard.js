
import React, { Component } from "react";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";



class Dashboard extends Component {

    constructor(props){
        super(props);
       
    }

    logout() {
        fire.auth().signOut();
    }
        render() {
            return(
                <div>
                 <h1>Dashboard here</h1>
              
                </div>
            )
        }
}


export default Dashboard;