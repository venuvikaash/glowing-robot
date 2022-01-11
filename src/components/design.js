import React from 'react';
import Nose from '../assets/images/nose.png';
import Neck from '../assets/images/neck/default.png';
import Background from '../assets/images/backgrounds/darkblue70.png'

const Design = () => {
    return (
        <div className='imageLength'>
            <img src={Background} alt='' className='backgroundLength position-absolute' />
            <img src={Neck} alt='' className='neck'/>
            <img src={Nose} alt='' className="nose" />
        </div>
    );
};

export default Design;