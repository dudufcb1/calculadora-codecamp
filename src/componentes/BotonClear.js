/** @format */

import React from 'react';
import '../stylesheets/BotonClear.css';

const BotonClear = (props) => {
  return (
    <div className='boton-clear' onClick={props.clearScreen}>
      {props.children}
    </div>
  );
};

export default BotonClear;
