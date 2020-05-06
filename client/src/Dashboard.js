
import React, { Component } from "react";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";



class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state ={
            users: [], 
            id: ""



        }
       
    }

    componentDidMount() {
        fire
            .database()
            .ref('user')
            .once('value')
            .then(snapShot => {
                snapShot.forEach(u => {
                    // this.state.users.push(u.val())  

                    // this.state.users.push({id: u.key, name: u.val().name, email:u.val().email, phone:u.val().phone, age:u.val().age, country:u.val().country})
                    this.state.users.push({
                        id: u.key,
                        ...u.val()
                    })

                    // console.log(u.key)
                })
            });
    }

  
        render() {
            return(
                <div>

{this.state.users.map((item,i)=> {
    console.log('test');
})}
Profile page</div>
            
            )
}
}


export default Dashboard;