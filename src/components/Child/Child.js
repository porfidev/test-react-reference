import React from 'react';

const Child = ({name}) => {
  console.log('Hola desde el hijo');

  return (
    <div>
      <h3>Hijo</h3>
      <h5>Nombre: {name}</h5>
    </div>
  );
};

export default Child;
