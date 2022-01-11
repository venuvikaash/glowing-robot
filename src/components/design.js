import React from 'react';
import Nose from '../assets/images/nose.png';
import Neck from '../assets/images/neck/default.png';
import Background from '../assets/images/backgrounds/darkblue70.png'
import Ears from './functions/ears';
import { ValueEars } from './style';

const Design = () => {
    return (
        <div className='imageLength'>
            <img src={Background} alt='' className='backgroundLength position-absolute' />
            <img src={Neck} alt='' className='neck'/>
            <img src={Nose} alt='' className="nose" />
            {/* <div>
                {ears.map((id,src) => {
                    return (
                        <div>{value === id.id ? (<><img src={id.src} key={id.id} className={id.className} alt='' /></>) : (<h2>hello</h2>)}</div>
                    )
                })}
                <img src={ears.src} key={ears.id} alt='' />
            </div> */}
            <Ears ValueEars={ValueEars}/>
        </div>
    );
};

export default Design;