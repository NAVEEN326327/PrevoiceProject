import React, { Component } from "react";
import fire from "./config/fire";
import './SignUp.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';



class Login extends Component {

    constructor(props) {
        super(props);

        // this.login = this.login.bind(this);
        this.login = this.login.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePwd = this.changePwd.bind(this);


        this.state = {
            users: [],

            email: "",
            password: "",

        }
    }


    ////////////////// Fetch data
    componentDidMount() {
        // fire
        //     .database()
        //     .ref('user')
        //     .once('value')
        //     .then(snapShot => {
        //         snapShot.forEach(u => {
        //             // this.state.users.push(u.val())  for retrieving complete obj
        //             // this.state.users.push({id: u.key, name: u.val().name, email:u.val().email, phone:u.val().phone, age:u.val().age, country:u.val().country})
        //             this.state.users.push({
        //                 id: u.key,
        //                 ...u.val()
        //             })

        //         })
        //     });
    }




    validEmail() {

        if (this.state.email.length < 6 || this.state.email.indexOf("@") < 2 || (this.state.email.indexOf(".") < this.state.email.indexOf("@")) || this.state.email.match(/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/)) {

            this.setState({
                emailError: "email format is not good"
            })
        } else {
            this.setState({
                emailError: ""
            })
            return 1;

        }

    }



    validPassword() {

        if (this.state.password.length < 6) {
            this.setState({
                passwordError: "password is weak"
            })
        }
        else {
            this.setState({
                passwordError: ""
            })
        }

    }

    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
        this.validEmail();

    }


    changePwd(e) {
        this.setState({
            password: e.target.value
        })

        this.validPassword();
    }




    ////////////////////////////////////////////////////////////////////
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log(u);
            }).catch((err) => {
                console.log(err);
            })
    }


    render() {
        return (
            <div className="container">
                {console.log(this.state.users)}
                <div className="form-group size1">SignIn</div>
                <form className="form" onSubmit={this.login}>
                    <div className="form-group">

                        <input
                            type="email"
                            id="email"
                            // name="email"
                            placeholder="email"
                            onChange={this.changeEmail}
                            value={this.state.email}

                            required
                        />


                    </div>
                    <span className="msg" >{this.state.emailError}</span>

                    <div className="form-group">

                        <input
                            type="password"
                            id="password"
                            // name="password"
                            onChange={this.changePwd}
                            placeholder="Password"
                            value={this.state.password}
                            required

                        />


                    </div>
                    <span className="msg" >{this.state.passwordError}</span>

                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary " />
                    </div>

                </form>
                
                
                <div className="form-group">
                <Link to="/signUp">
                <input type="submit" value="Register" className="btn btn-success" />


                </Link>

                </div>
            </div>
        )
    }
}


export default Login;