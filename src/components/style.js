import React from 'react';
import {Button} from 'react-bootstrap'
import Ears from './functions/ears';

const Styles = () => {
    const EarsImage = () => {
            return(
                <Ears types={Button.type} />
            )
    };
    return (
        <div>
            <h3 className='heading'>STYLES</h3>
            <div className='panelLength'>
            <div className='accesoriesPanel'>
                <Button className="accesoriesButton" type="1" onClick={EarsImage}>Default</Button>
                <Button className="accesoriesButton" type="2" onClick={EarsImage}>Curls</Button>
                <Button className="accesoriesButton" type="3" onClick={EarsImage}>Short</Button>
                <Button className="accesoriesButton" type="4" onClick={EarsImage}>Band</Button>
                <Button className="accesoriesButton" type="5" onClick={EarsImage}>Elegant</Button>
                <Button className="accesoriesButton" type="6" onClick={EarsImage}>Quiff</Button>
            </div>
            </div>
        </div>
    )
}

export default Styles;