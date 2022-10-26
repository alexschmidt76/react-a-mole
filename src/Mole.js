import React, { useEffect } from 'react';
import moleImg from './mole.png';

function Mole(props) {
    useEffect(() => {
        let cooldown = Math.ceil(Math.random() * 3000);
        let timer = setInterval(() => {
            props.setDisplayMole(false)
        }, cooldown);

        return () => clearTimeout(timer);
    });

    return (
        <div>
            <img 
            src={moleImg} 
            alt='mole'
            onClick={props.handleClick} />
        </div>
    );
}

export default Mole;