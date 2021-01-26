import React from 'react';
import Tilt from 'react-tilt'
import "./Logo.css";
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="center ma4 mt0">
            <Tilt className="Tilt br3 shadow-2" options={{ max : 60 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa5"> 
                    <img style={{paddingTop: '25px'}} alt="brain_icon" src={ brain }/>
                </div>
            </Tilt>
        </div>
    )
}


export default Logo
