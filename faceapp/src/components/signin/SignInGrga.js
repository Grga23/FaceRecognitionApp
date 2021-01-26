import React from 'react';
import './SignIn.css'; 

const SignIn = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <div className="center"> 
                <div className="center ba bw2 b--dark-pink form center pa4 br3 shadow-5 ">
                    <input className="f4 p2 w-70 center ba bw2 b--dark-pink " type='text' onChange={onInputChange} placeholder="Username"/>
                    <input className="f4 p2 w-70 center ba bw2 b--dark-pink " type='text' onChange={onInputChange} placeholder="Password"/>
                    <button className="f6 grow center no-underline br-pill ba bw2 b--dark-pink ph3 pv2 dib hot-pink" onClick={onButtonSubmit}> SIGN IN </button>
                </div> 
            </div>
        </div>
    );
}

export default SignIn