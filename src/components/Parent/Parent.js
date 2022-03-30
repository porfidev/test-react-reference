import React, { useState } from 'react';
import Child from '../Child/Child.js';

const Parent = () => {
  console.log('Hola desde el padre');

  const [number, setNumber] = useState(0);
  const [name, setName] = useState('sin nombre');

  const handleSetNumber = () => {
    setNumber(Math.floor(Math.random() * 101));
  }

  const handleSetName = (name) => {
    setName(name);
  }

  return (
    <div>
      <h3>Padre</h3>
      <h5>Número: {number}</h5>
      <Child name={name} />
      <hr/>
        <button onClick={handleSetNumber}>Establecer número aleatorio</button>
      <br />
      <button onClick={() => handleSetName('Lifeline')}>Establecer nombre a Lifeline</button>
      <button onClick={() => handleSetName('Octane')}>Establecer nombre a Octane</button>

    </div>
  );
};

export default Parent;
