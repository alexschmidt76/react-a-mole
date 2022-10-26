import React, { useEffect } from 'react';
import moleImg from './molehill.png';

function EmptySlot(props) {
    useEffect(() => {
        let cooldown = Math.ceil(Math.random() * 15000);
        let timer = setInterval(() => {
            props.setDisplayMole(true)
        }, cooldown);

        return () => clearTimeout(timer);
    });

    return (
        <div>
            <img 
            src={moleImg}
            alt='mole hill'
            onClick={props.handleMisClick} />
        </div>
    );
}

export default EmptySlot;