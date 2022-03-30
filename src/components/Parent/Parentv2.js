import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Child from '../Child/Child.js';

const Parentv2 = () => {
  console.log('Hola desde el padre');

  const [number, setNumber] = useState(0);
  const childRef = useRef();

  const handleSetNumber = () => {
    setNumber(Math.floor(Math.random() * 101));
  }


  const [name, setName] = useState('sin nombre');

  const handleSetName = (name) => {
    setName(name);
  }

  const ChildNoMemo = forwardRef((props, ref) => {

    console.log('Hola desde el hijo con Referencia');

    const [name, setName] = useState('sin nombre');

    useImperativeHandle(ref, () => ({
      handleSetName(name) {
        setName(name);
      }
    }));

    return (
      <>
        <h2>Referenciado</h2>
        <div>
          <h3>Hijo</h3>
          <h5>Nombre: {name}</h5>
        </div>
      </>
    );
  });

  return (
    <div>
      <h3>Padre</h3>
      <h5>Número: {number}</h5>
      <Child name={name}/>
      <ChildNoMemo ref={childRef}/>
      <hr/>
        <button onClick={handleSetNumber}>Establecer número aleatorio</button>
      <br />
      <button onClick={() => childRef.current.handleSetName('Lifeline')}>Establecer nombre REFERENCIADO a Lifeline</button>
      <button onClick={() => childRef.current.handleSetName('Octane')}>Establecer REFERENCIADO IMP sa Octane</button>
      <br />
      <button onClick={() => handleSetName('Lifeline')}>Establecer nombre a Lifeline</button>
      <button onClick={() => handleSetName('Octane')}>Establecer nombre a Octane</button>
    </div>
  );
};

export default Parentv2;
