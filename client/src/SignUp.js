import React, { Component } from "react";
import fire from "./config/fire";
import './SignUp.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import LoginAnimation from './LoginAnimation';


class SignUp extends Component {

    constructor(props) {
        super(props);

        // this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePwd = this.changePwd.bind(this);
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeContry = this.changeContry.bind(this);


        this.state = {
            users: [],

            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            phone: "91",
            age: "",
            country: "",


            date: new Date(),
            friends: 0,
            image: '',
            level: 1,
            minutes: 0,
            time: '',
            talk: 0,
            uid: '',

            phoneError: "",
            emailError: "",
            passwordError: "",
            confirmPasswordError: "",
            phoneError: "",
            lastError: ""

        }
    }


    ////////////////// Fetch data
    componentDidMount() {
        fire
            .database()
            .ref('user')
            .once('value')
            .then(snapShot => {
                snapShot.forEach(u => {
                    // this.state.users.push(u.val())  for retrieving complete obj
                    // this.state.users.push({id: u.key, name: u.val().name, email:u.val().email, phone:u.val().phone, age:u.val().age, country:u.val().country})
                    this.state.users.push({
                        id: u.key,
                        ...u.val()
                    })

                })
            });
    }


    // login(e) {
    //     e.preventDefault();
    //     fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    //         .then((u) => {
    //             console.log(u);
    //         }).catch((err) => {
    //             console.log(err);
    //         })
    // }




    validName() {
        if (this.state.name.length > 1 && !(this.state.name.match(/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/))) {
            this.setState({
                nameError: ""
            })
        }
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

    validPhone() {
        if (this.state.phone.length != 11) {
            this.setState({
                phoneError: "Invalid phone number"
            })
            console.log(this.state.phone.length)
        } else {
            this.setState({
                phoneError: ""
            })
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

    validConfirmPassword() {

        if (this.state.password === this.state.confirmPassword) {
            this.setState({
                confirmPasswordError: ""
            })
        } else {
            this.setState({
                confirmPasswordError: ""
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


    changeConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value
        })
        this.validConfirmPassword();
    }


    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changePhone(e) {
        this.setState({
            phone: e.target.value
        })
        this.validPhone();
    }

    changeAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    changeContry(e) {
        this.setState({
            country: e.target.value
        })
    }



    ////////////////////////////////////////////////////////////////////
    signup(e) {
        e.preventDefault();

        if (this.validEmail() == 1) {


            fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((u) => {
                    alert("User Created")
                }).catch((err) => {
                    alert(err);
                })

            this.setState({
                lastError: "Created!"
            })



            /// USer post
            fire.database()
                .ref('user')
                .push({
                    name: this.state.name,
                    email: this.state.email,
                    age: this.state.age,
                    phone: this.state.phone,
                    profession: this.state.country,
                    date: new Date(),
                    friends: this.state.friends,
                    image: this.state.image,
                    level: this.state.level,
                    minutes: this.state.minutes,
                    time: this.state.time,
                    talk: this.state.talk,
                    uid: this.state.uid
                    // add time schema too for tracking user calling time


                });



        }

        // window.location = '/signup';
    }

    // deleteData(){
    /////////////////////  Delete
    //  fire
    //  .database()
    //  .ref("user")
    //  .child('u_id')
    //  .remove();
    // }






    render() {
        return (

            <div className="container">
                {/* <div className="signupImage">
                    <img src="https://tnav4.ftcdn.net/jpg/01/26/63/11/240_F_126631173_W9Nq8ZA5s0R0M3ZIBx3BMytVIFseGa9c.jpg" alt=" "></img>
                </div> */}

                {console.log(this.state.users)}
                <div className="form-group size1">Sign Up</div>
                <LoginAnimation />

                <form className="signupform" onSubmit={this.signup}>
                    <div className="left">
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

                            <input
                                type="password"
                                id="confirmPassword"
                                // name="password"
                                onChange={this.changeConfirmPassword}
                                placeholder="Confirm password"
                                value={this.state.confirmPassword}
                                required

                            />
                            {/* <span className="msg" >{this.state.passwordError}</span> */}
                        </div>
                        <span className="msg" >{this.state.confirmPasswordError}</span>

                        <div className="form-group">



                            <input
                                type="text"
                                id="name"
                                className="name"
                                // name="email"
                                placeholder="name"
                                onChange={this.changeName}
                                value={this.state.name}
                                required

                            />
                        </div>
                    </div>
                   <div className="right">
                        

                    <div className="form-group">

                        <input
                            type="text"
                            id="phone"
                            // name="email"
                            placeholder="phone"
                            onChange={this.changePhone}
                            value={this.state.phone}
                            required

                        />
                    </div>
                    <span className="msg" >{this.state.phoneError}</span>


                    <div className="form-group">


                        <input
                            type="text"
                            id="age"
                            // name="email"
                            placeholder="age"
                            onChange={this.changeAge}
                            value={this.state.age}
                            required

                        />
                    </div>
                    <div className="form-group">


                        <input
                            type="text"
                            id="country"
                            // name="password"
                            onChange={this.changeContry}
                            placeholder="Profession"
                            value={this.state.country}
                            required

                        />
                    </div>


                    <div className="form-group">

                        {/* <button onClick={this.login}>Login</button> */}
                        <input type="submit" value="Submit" className="btn btn-primary" />


                    </div>
                    <span className="msg1" >{this.state.lastError}</span>
                    </div>

                </form>

                <div className="form-group">
                    <Link to="/">
                        <input type="submit" value="SignIn" className="btn btn-success" />
                   
                    </Link>
                    <div>
                    <span className="msg1"  >If already Registered!!</span>

                    </div>

                </div>
            </div>
        )
    }
}


export default SignUp;