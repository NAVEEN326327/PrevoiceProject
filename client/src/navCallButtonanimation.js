import React from 'react';
// import Home from './Home';
import Lottie from 'react-lottie';
import * as homeanimation from './jsonFiles/callbuttonanimation.json';


const defaultOptions = {
    loop: true,
    autodisplay: true,
    animationData: homeanimation.default ,
    rendererSettings: {
        preserveAspectRation: 'xMidYMid slice'
    }
};

const NavCallButtonAnimation = () => {
    return (
        <div>
<Lottie options={defaultOptions} height={50} width={50} />
        </div>
    )
}

export default NavCallButtonAnimation;