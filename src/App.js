/** @format */

import './App.css';
import Logo from './componentes/Logo';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [hasResult, setHasResult] = useState(false); // Nuevo estado para rastrear si ya se ha calculado un resultado

  // ...
  const agregarInput = (val) => {
    if (hasResult) {
      setInput(val); // Si ya hay un resultado, reemplaza el valor en lugar de concatenarlo
      setHasResult(false); // Establece hasResult a false
    } else {
      if (val === '+' || val === '-' || val === '*' || val === '/') {
        if (input === '') {
          setInput('0' + val); // Agrega un 0 antes del operador si no hay ningún número antes
        } else {
          setInput(input + val);
        }
      } else {
        setInput(input + val);
      }
    }
  };
  // ...

  const clearScreen = () => {
    setInput('');
    setHasResult(false); // Asegúrate de restablecer hasResult a false al limpiar la pantalla
  };

  const calcularResultado = () => {
    if (input) {
      try {
        let result = evaluate(input);
        setInput(result.toString());
        setHasResult(true); // Establece hasResult a true después de calcular el resultado
      } catch (error) {
        setInput('ERROR'); // Si ocurre un error, muestra 'ERROR' en la pantalla
      }
    } else {
      alert('Ingresa valores');
    }
  };

  return (
    <div className='App'>
      <Logo />
      <div className='contenedor-principal'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear clearScreen={clearScreen}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
