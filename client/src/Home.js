
import React, { Component } from "react";
import fire from "./config/fire";
import VideoPlay from './Video';


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
                 <h1></h1>
                 <VideoPlay/>
                 {/* <button onClick={this.logout}> Logout</button> */}
                </div>
            )
        }
}


export default Home;