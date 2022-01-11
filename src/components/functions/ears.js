import React from 'react';
import { Image } from 'react-bootstrap';

export default function Ears (types) {
    const ears = [
        {
            type: "1",
            image: require('../../assets/images/ears/default.png')
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
        ears.map((item) => {
            if(types === 1)
                <Image image={item.image} key="id" />
        })
    )
}