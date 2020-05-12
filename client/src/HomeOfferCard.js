
import React, { Component } from "react";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';
import './HomeOfferCard.css';


class HomeOfferCard extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {
        return (
            <div className="card">
                <h3>What we provides</h3>
<div className="card-component">
<img className="video" src='https://image.flaticon.com/icons/svg/2920/2920020.svg' alt="pic"></img>
<p><b>Video Calling</b>
<ul>
    <li>To Random people </li>
    <li>To Friends</li>
    <li>Instant Calling</li>
</ul>

</p>
</div>

<div className="card-component">
<img className="video" src=' https://image.flaticon.com/icons/svg/2920/2920291.svg' alt="pic"></img>
<p><b>Chatting</b>
<ul>
    <li>Grammer check</li>
    <li>Make post and comment</li>
</ul>
</p>
</div>


<div className="card-component">
<img className="video" src=' https://t4.ftcdn.net/jpg/03/41/81/95/240_F_341819523_qOtFlRFNhAr9x4tRpm4uCc9LaWOGxNFd.jpg' alt="pic"></img>

<p><b>Read and learn</b>
<ul>
    <li>Book search</li>
    <li>Read</li>

</ul>
</p>
</div>


<div className="card-component">
<img className="video" src='https://image.flaticon.com/icons/svg/2581/2581110.svg' alt="pic"></img>

<p><b>Uploading</b>
<ul>
    <li>Share Books</li>
    <li>Videos</li>

</ul>
</p>
</div>


          




            </div>
        )
    }
}


export default HomeOfferCard;