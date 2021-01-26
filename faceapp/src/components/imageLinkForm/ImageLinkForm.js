import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <div>
                <p className='f3'>
                    {'This Magic Brain will detect faces in your pictures. Git it a try'}
                </p>
            </div>
            <div className="center"> 
                <div className="center ba bw2 b--dark-pink form center pa4 br3 shadow-5 ">
                    <input className="f4 p2 w-70 center ba bw2 b--dark-pink " type='text' onChange={onInputChange} placeholder="Enter your image URL"/>
                    <button className="f6 grow center no-underline br-pill ba bw2 b--dark-pink ph3 pv2 dib hot-pink" onClick={onButtonSubmit}> DETECT </button>
                </div> 
            </div>
        </div>
    );
}

export default ImageLinkForm