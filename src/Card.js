import React from 'react';
import {robots} from './Robot.js'
import Card from './Card';

const card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${props.id}?100x100`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
} 

export default card;
