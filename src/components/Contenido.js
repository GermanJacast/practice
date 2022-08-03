import {Link} from 'react-router-dom'
import '../css/contenido.css';

export const Contenido = () => {
    const cosas = [
      'Comida',
      'Juguetes',
      'Ropa',
      'Etc'
    ]

    return (
      <div className='container-contenido'>
        <h1 className='tittle'>Contenido</h1>
        <ul>
          {cosas.map(cosa =>(
            <li key={cosa}><Link to={`/cosas/${cosa}`}>{cosa}</Link></li>
          ))}
        </ul>
      </div>
  )}
 
  export default Contenido;