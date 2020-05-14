
import React, { Component } from "react";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';
import './HomeProfile.css';


class HomeProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.thisuser,
            email: props.thisCurrentUserEmail
               

        }

    }



    render() {
        return (
            <div className="card">

                <div className="card-img-container">
                    <img src={this.state.currentUser.dp} alt="pic"></img>

                </div>

                <div>
                    <p>  Name: &nbsp;    {this.state.currentUser.name} </p>
                 
                    <p>  Profession: &nbsp;    {this.state.currentUser.profession} </p>
                    
                    <p> Age: &nbsp;    {this.state.currentUser.age} </p>
                    
                    <p> Level: &nbsp; {this.state.currentUser.level} </p>
                    
                    <p>  Minutes: &nbsp;  {this.state.currentUser.minutes} </p> 

                    <p> Friends: &nbsp; {this.state.currentUser.friends}</p>

                    <p> Email: &nbsp; {this.state.email}</p>
 
                </div>

            </div>
        )
    }
}


export default HomeProfile;






// fetch('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=af76663bce144bbab429cfbe46c3add9')
// .then(function(res) {
//     return res.json();
// })
// .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
// });