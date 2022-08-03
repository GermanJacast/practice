import { Link,useParams, Outlet, NavLink} from 'react-router-dom'
import '../css/cosas.css';

export const Cosas= () => {
    const {name} = useParams()
    return (
      <div className='container-cosas'>
        <h1 className='tittle'>Cosas</h1>
        <h2>{name}</h2>
        <NavLink to='details'>Ir a los detalles</NavLink>
        <Outlet/>
      </div>
  )}

export default Cosas;