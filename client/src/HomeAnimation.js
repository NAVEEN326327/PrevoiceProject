import React from 'react';
// import Home from './Home';
import Lottie from 'react-lottie';
import * as homeanimation from './jsonFiles/homeanimation1.json';


const defaultOptions = {
    loop: true,
    autodisplay: true,
    animationData: homeanimation.default ,
    rendererSettings: {
        preserveAspectRation: 'xMidYMid slice'
    }
};

const HomeAnimation = () => {
    return (
        <div>
<Lottie options={defaultOptions}  width={400} />
        </div>
    )
}

export default HomeAnimation;