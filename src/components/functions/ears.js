import React from 'react';
// import { Image } from 'react-bootstrap';
import One from '../../assets/images/ears/default.png';
import Three from '../../assets/images/ears/tilt-forward.png';
import Two from '../../assets/images/ears/tilt-backward.png';
// import { ValueEars } from '../style';

export default function Ears ({ValueEars}) {
    // const earType = types;
    const ears = [
        {
            id: "1",
            src: One,
            className:"tiltDefault"
        },
        {
            id: "2",
            src: Two,
            className: "tiltBackward"
        },
        {
            id: "3",
            src: Three,
            className: "tiltForward"
        },
    ];
    console.log('image type',ValueEars)
    return(    
        <div>
                {ears.map((id,src) => {
                    return (
                        <div>{ValueEars === id.id ? (<><img src={id.src} key={id.id} className={id.className} alt='' /></>) : (<h2>hello</h2>)}</div>
                    )
                })}
            </div>
    )
}