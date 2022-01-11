import React,{useState} from 'react';
import {Button} from 'react-bootstrap'
// import Ears from './functions/ears';
// import One from '../assets/images/ears/default.png';
// import Three from '../assets/images/ears/tilt-forward.png';
// import Two from '../assets/images/ears/tilt-backward.png';
// const ears = [
//     {
//         id: "1",
//         src: One,
//         className:"tiltDefault"
//     },
//     {
//         id: "2",
//         src: Two,
//         className: "tiltBackward"
//     },
//     {
//         id: "3",
//         src: Three,
//         className: "tiltForward"
//     },
// ];

const Styles = () => {
    const [valueEars,setValue] = useState();
    ValueEars = valueEars;
    // console.log(ValueEars,'value ears')
    return (
        <div>
            <h3 className='heading'>STYLES</h3>
            <div className='panelLength'>
            <div className='accesoriesPanel'>
                <Button className="accesoriesButton" value="1" onClick={(e) => {setValue(e.target.value)}}>Default</Button>
                <Button className="accesoriesButton" value="2" onClick={(e) => {setValue(e.target.value)}}>Curls</Button>
                <Button className="accesoriesButton" value="3" onClick={(e) => {setValue(e.target.value)}}>Short</Button>
                {/* <Button className="accesoriesButton" type="4" onClick={EarsImage}>Band</Button>
                <Button className="accesoriesButton" type="5" onClick={EarsImage}>Elegant</Button>
                <Button className="accesoriesButton" type="6" onClick={EarsImage}>Quiff</Button> */}
            </div>
            </div>
        </div>
    )
}

export default Styles;

export let ValueEars;
// console.log(ValueEars,'value ears');