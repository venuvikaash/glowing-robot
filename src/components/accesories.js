import React from 'react';
import {Button} from 'react-bootstrap';

const Accesories = () => {
    return(
        <div className='my-5'>
            <h3 className='text-uppercase'>Accesories</h3>
            <div className='panelLength'>
            <div className='accesoriesPanel'>
                <Button className="accesoriesButton">ears</Button> 
                <Button className="accesoriesButton">eyes</Button> 
                <Button className="accesoriesButton">hair</Button> 
                <Button className="accesoriesButton">leg</Button> 
                <Button className="accesoriesButton">mouth</Button> 
                <Button className="accesoriesButton">neck</Button> 
            </div>
            </div>
        </div>
    );
};

export default Accesories;