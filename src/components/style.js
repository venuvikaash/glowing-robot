import React from 'react';
import {Button} from 'react-bootstrap'
import Ears from './functions/ears';

const Styles = () => {
    return (
        <div>
            <h3 className='heading'>STYLES</h3>
            <div className='panelLength'>
            <div className='accesoriesPanel'>
                <Button className="accesoriesButton" type="1" onClick={Ears}>Default</Button>
                <Button className="accesoriesButton" type="2" onClick={Ears}>Curls</Button>
                <Button className="accesoriesButton" type="3" onClick={Ears}>Short</Button>
                <Button className="accesoriesButton" type="4" onClick={Ears}>Band</Button>
                <Button className="accesoriesButton" type="5" onClick={Ears}>Elegant</Button>
                <Button className="accesoriesButton" type="6" onClick={Ears}>Quiff</Button>
            </div>
            </div>
        </div>
    )
}

export default Styles;