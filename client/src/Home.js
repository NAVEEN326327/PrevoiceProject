
import React, { Component } from "react";
import fire from "./config/fire";
import Video1 from './Video';


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
                 <h1>Home page</h1>
                 <Video1/>
                 {/* <button onClick={this.logout}> Logout</button> */}
                </div>
            )
        }
}


export default Home;