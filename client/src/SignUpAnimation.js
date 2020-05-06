import React from 'react';
// import Home from './Home';
import Lottie from 'react-lottie';
import * as homeanimation from './jsonFiles/signupanimation.json';
import './SignUp.css';

const defaultOptions = {
    loop: true,
    autodisplay: true,
    animationData: homeanimation.default ,
    rendererSettings: {
        preserveAspectRation: 'xMidYMid slice'
    }
};

const SignUpAnimation = () => {
    return (
        <div className="signupanimate1">
<Lottie options={defaultOptions} height={200} width={200} />
        </div>
    )
}

export default SignUpAnimation;