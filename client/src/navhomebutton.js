import React from 'react';
// import Home from './Home';
import Lottie from 'react-lottie';
import * as homeanimation from './jsonFiles/homebuttonanimation.json';


const defaultOptions = {
    loop: true,
    autodisplay: true,
    animationData: homeanimation.default ,
    rendererSettings: {
        preserveAspectRation: 'xMidYMid slice'
    }
};

const NavHomeButtonAnimation = () => {
    return (
        <div>
<Lottie options={defaultOptions} height={100} width={120} />
        </div>
    )
}

export default NavHomeButtonAnimation;