import React from 'react';
// import { Image } from 'react-bootstrap';
import One from '../../assets/images/ears/default.png';

export default function Ears ({types}) {
    // const earType = types;
    const ears = [
        {
            type: "1",
            image: One
        },
        {
            type: "2",
            image: require('../../assets/images/ears/tilt-backward.png')
        },
        {
            type: "3",
            image: require('../../assets/images/ears/tilt-forward.png')
        },
    ];

    return(    
        ears.map(({item}) => (
            <img src={item.image} key={item.type} alt='' />
        ))
    )
}