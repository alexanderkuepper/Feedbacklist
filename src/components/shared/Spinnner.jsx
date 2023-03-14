import React from 'react';
import spinner from '../assets/spinner.gif';
function Spinnner() {
  return (
    <img
      src={spinner}
      alt='Spinner'
      style={{
        width: '100px',
        margin: 'auto',
        display: 'block',
      }}
    />
  );
}

export default Spinnner;
