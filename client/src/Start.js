
import React, { Component } from "react";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoPlay from './Video';



class Start extends Component {

    constructor(props){
        super(props);
       
    }

    
        render() {
            return(
                <div>
                 <h1>Start page</h1>
                 <VideoPlay/>
              
                </div>
            )
        }
}


export default Start;