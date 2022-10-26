import React, { useState } from 'react';
import './App.css';
import MoleContainer from './MoleContainer';

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(
      <MoleContainer 
      key={i}
      score={score} 
      setScore={setScore} />
      );
    }

    return (
      <div className='molehills'>
        {hills}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      <h3>Score: {score} </h3>
      {createMoleHill()}
    </div>
  );
}

export default App;
