import React,{useState} from 'react';
import {Button} from 'react-bootstrap'
import Ears from './functions/ears';

const Styles = () => {
    const [value,setValue] = useState();
    const EarsImage = (e) => {
        setValue(e.target.value);
            return(
                <div>
                    <Ears types={value} />
                </div>
            )
    };
    return (
        <div>
            <h3 className='heading'>STYLES</h3>
            <div className='panelLength'>
            <div className='accesoriesPanel'>
                <Button className="accesoriesButton" value={1} onClick={EarsImage}>Default</Button>
                <Button className="accesoriesButton" value={2} onClick={EarsImage}>Curls</Button>
                <Button className="accesoriesButton" value={3} onClick={EarsImage}>Short</Button>
                <Button className="accesoriesButton" type="4" onClick={EarsImage}>Band</Button>
                <Button className="accesoriesButton" type="5" onClick={EarsImage}>Elegant</Button>
                <Button className="accesoriesButton" type="6" onClick={EarsImage}>Quiff</Button>
            </div>
            </div>
        </div>
    )
}

export default Styles;