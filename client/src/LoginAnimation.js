import React from 'react';
// import Home from './Home';
import Lottie from 'react-lottie';
import * as loginanimation from './jsonFiles/loginanimation1.json';


const defaultOptions = {
    loop: true,
    autodisplay: true,
    animationData: loginanimation.default ,
    rendererSettings: {
        preserveAspectRation: 'xMidYMid slice'
    }
};

const LoginAnimation = () => {
    return (
        <div>
<Lottie options={defaultOptions} height={200} width={200} />
        </div>
    )
}

export default LoginAnimation;