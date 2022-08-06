import '../css/calculadora.css';
import {useState} from 'react';
import {evaluate} from 'mathjs';

const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.manejarClick}>
    {props.children}
  </div>
)

const Boton = (props) => {
  const operador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return(
    <div className={`boton-calc ${operador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={ () => props.manejarClick(props.children)}>
      {props.children}
    </div>
  )
};

const Pantalla = ({input}) => {
  return(
    <div className='input'>
      {input}
    </div>
  )
};
export const Calculadora = () => {
  const [inp, setInput] = useState('');

  const agregarInput = val => {
    setInput(inp + val);
  };
 
  const calcularResultado = () =>{
    if(inp){
      // mathjs
      setInput(evaluate(inp));
    }else{
      alert("Ingrese valores para los calculos")
    }
    
  };

  return (
    <div className='container-calculadora'>
        <h1 className="tittle">Calculadora</h1>
        <div className='calculadora'>
          <Pantalla input={inp}/>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClick={() => setInput('')}>Limpiar</BotonClear>
          </div>
        </div>
    </div>
  )
};

export default Calculadora