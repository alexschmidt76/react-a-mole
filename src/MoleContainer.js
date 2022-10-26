import React, { useState } from "react";
import Mole from './Mole';
import EmptySlot from './EmptySlot';

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false);

    const handleClick = () => {
        props.setScore(props.score + 1);
        setDisplayMole(false);
    }

    const handleMisClick = () => {
        props.setScore(props.score - 1);
    }

    return (
        <div className="mole-container">
            { 
                displayMole ? 
                <Mole setDisplayMole={setDisplayMole} handleClick={handleClick} /> : 
                <EmptySlot setDisplayMole={setDisplayMole} handleMisClick={handleMisClick} /> 
            }
        </div>
    )
}

export default MoleContainer;