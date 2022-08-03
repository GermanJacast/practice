import '../css/contadorClick.css';
import { useState } from 'react';

const Cont = ({numClics}) =>{
    return(
        <div className='cont'>
            {numClics}
        </div>
    )
}
const Boton = ({texto, botonClick, manejarClick}) => {
    return(
        <button className={botonClick ? 'boton-click' : 'boton-reiniciar'}
        onClick={manejarClick}>
            {texto}
        </button>
    )
}

export const Contador = () => {
    const [numClics, setNumClics] = useState(0);
    
    const manejarClick =  () => {
        setNumClics(numClics + 1);
    }
    const reiniciarContador = () => {
        setNumClics(0);    
    }

    return(
        <div className='container-contador'>
            <h1 className="tittle">Contador</h1>
            <Cont numClics={numClics}/>
            <Boton texto='Clic' botonClick={true} manejarClick={manejarClick}/>
            <Boton texto='Reiniciar' botonClick={false} manejarClick={reiniciarContador}/>
        </div>
        
    )
}



export default Contador