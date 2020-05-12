
import React, { Component } from "react";
import fire from "./config/fire";
import HomeAnimation from './HomeAnimation';
import './home.css';
import HomeProfile from './HomeProfile';
import HomeOfferCard from './HomeOfferCard';
// function Home() {

//     const [users, setUsers] = React.useState([])



//     React.useEffect(() => {
//         const fetchData = async () => {
//             const db = fire.firestore()
//             const data = await db.collection('user').get()
//             setUsers(data.docs.map(doc => doc.data()))
//         }
//         fetchData()
//     }, [])

//     return (
//         <div className="homeContainer" >
//             {/* {console.log(this.state.currentUser.email)} */}
//             <div className="homeContainer-left">
//                 <HomeAnimation />
//               <div>
//                   {users.map(u1 => (
//                       console.log(u1)
//                   ))}
//               </div>


//             </div>
//             <div className="homeContainer-middle">
//                 <HomeAnimation />



//             </div>
//             <div className="homeContainer-right">
//                 <HomeAnimation />

//             </div>
//         </div>
//     )
// }




class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUserEmail: '',
            user: [],
            users: '',


            // Change this static user data to dynamic user datat
            currentUser: {
                name: 'Naveen',
                // currentUserEmail: '',
                age: 23,
                profession: 'Student',
                level: 1,
                minutes: 0,
                dp: 'https://scontent.fdel5-1.fna.fbcdn.net/v/t1.0-1/c0.0.200.200a/p200x200/56994090_444472356358185_7769903942237945856_o.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_ohc=PX5cQCiILbUAX_gL-Vn&_nc_ht=scontent.fdel5-1.fna&oh=d63c7025ad61146689f040f3d5cbec64&oe=5EE1A85D',
                friends: 0,

            }


        }
    }
    componentDidMount() {

        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ currentUserEmail: user.email })
                // console.log(user)
            } else {
                this.setState({ currentUser: null })
            }

        })
        fire.firestore().collection('user')
            .get()
            .then(snapshot => {
                const users = []
                snapshot.forEach(element => {
                    const data = element.data()
                    users.push(data)
                    console.log(snapshot)
                });
                this.setState({ users: users })
            })
            .catch(err => console.log(err))



    }

    // logout() {
    //     fire.auth().signOut();
    // }
    render() {
        return (

            <div className="homeContainer" >
                {/* {console.log(this.state.currentUser.email)} */}
                <div className="homeContainer-left">
                     {/* { if (this.state.currentUserEmail) }
                    {
                        this.state.users &&
                        this.state.user.map(u => {
                            return (
                                <div>
                                    {
                                console.log(u.name)

                                    }
                                    <p>{u.name}</p>
                                    <p>{u.age}</p>

                                </div>
                            )
                        })
                    } */}
                    {/* {
                        this.state.users &&
                        this.state.user.map(u => {
                            return (
                                <div>
                                    {
                                console.log(u.name)

                                    }
                                    <p>{u.name}</p>
                                    <p>{u.age}</p>

                                </div>
                            )
                        })
                    } */}
                    {/* {console.log(this.state.users)} */}

                    <HomeProfile thisuser={this.state.currentUser}  />
                    <HomeOfferCard />
                
                </div>


                <div className="homeContainer-middle">
                    <HomeAnimation />



                </div>
                <div className="homeContainer-right">
                <HomeProfile thisuser={this.state.currentUser} thisCurrentUserEmail={this.state.currentUserEmail} />


                </div>
            </div>
        )
    }
}


export default Home;

