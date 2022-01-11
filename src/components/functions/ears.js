import React from 'react';
// import { Image } from 'react-bootstrap';
import One from '../../assets/images/ears/default.png';
import Three from '../../assets/images/ears/tilt-forward.png';
import Two from '../../assets/images/ears/tilt-backward.png';

export default function Ears ({types}) {
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
    console.log('image type',types)
    return(    
        ears.map(({id,src,className}) => (
            <img src={src} key={types} alt='' className={className} />
        ))
    )
}