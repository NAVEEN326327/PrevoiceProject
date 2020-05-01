
import React, { Component } from "react";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import './Navbar.css';




class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="nav1">

                <div>
                    <Link to="/">
                        <button className="btn btn-dark"> Home</button>
                    </Link>
                </div>
              

                <div>
                    <Link to="/dashboard">
                        <button className="btn btn-dark"> Dashboard</button>
                    </Link>
                </div>

                <div>
                    <Link to="/level">
                        <button className="btn btn-dark "> Level</button>
                    </Link>
                </div>
                <div>
                    <button onClick={this.logout} className="btn btn-dark"> Logout</button>
                </div>

            </div>
        )
    }
}


export default Navbar;