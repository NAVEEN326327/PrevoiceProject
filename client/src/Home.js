
import React, { Component } from "react";
import fire from "./config/fire";
import HomeAnimation from './HomeAnimation';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
          
        }
    }

    // logout() {
    //     fire.auth().signOut();
    // }
        render() {
            return(
                <div>
               
                 <HomeAnimation/>
                </div>
            )
        }
}


export default Home;

