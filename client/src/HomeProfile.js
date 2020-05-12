
import React, { Component } from "react";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';
import './HomeProfile.css';


class HomeProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {
        return (
            <div className="card">

                <div className="card-img-container">
                    <img src={this.props.thisuser.dp} alt="pic"></img>

                </div>

                <div>
                    <p>  Name: &nbsp;    {this.props.thisuser.name} </p>
                 
                    <p>  Profession: &nbsp;    {this.props.thisuser.profession} </p>
                    
                    <p> Age: &nbsp;    {this.props.thisuser.age} </p>
                    
                    <p> Level: &nbsp; {this.props.thisuser.level} </p>
                    
                    <p>  Minutes: &nbsp;  {this.props.thisuser.minutes} </p> 

                    <p> Friends: &nbsp; {this.props.thisuser.friends}</p>

                    <p> Email: &nbsp; {this.props.thisCurrentUserEmail}</p>
 
                </div>

            </div>
        )
    }
}


export default HomeProfile;