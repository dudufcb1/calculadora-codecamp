/** @format */

import React from 'react';
import logotype from '../imagenes/fcc_primary_large.png';
const Logo = () => {
  return (
    <div className='freecodecamp-logo'>
      <img className='img-logo' src={logotype} alt='Logo de freeCodeCamp' />
    </div>
  );
};
export default Logo;
