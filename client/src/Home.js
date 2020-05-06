
import React, { Component } from "react";
import fire from "./config/fire";
// import MyAnimation from './HomeAnimation';

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
                 <h1>
                 Home 

                 </h1>
                 {/* <button onClick={this.logout}> Logout</button> */}
                 {/* <lottie-player src="https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player> */}
                 {/* <MyAnimation/> */}
                </div>
            )
        }
}


export default Home;

