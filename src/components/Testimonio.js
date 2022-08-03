import React from 'react'
import '../css/testimonio.css';


const Testimonio = (props) => {
  return (
    <div className='container-testimonio'>
        <div className='container-test'>
            <div className='container-test-image'>
                <img className='test-img' 
                src={require(`../img/img-${props.imagen}.png`)}
                alt='Foto de X' />
                
            </div>
            <div className='container-test-content'>
                <p className='name'>
                    <strong>{props.name}</strong> en {props.country}
                </p>
                <p className='cargo'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className='text'>
                    "{props.testimonio}" 
                </p>
            </div>
        </div>
    </div>
  )}
export const Testimonios = () => {
    
    const test = [
        <Testimonio
          name='X'
          country='X'
          imagen='1'
          cargo='Ingeniero X'
          empresa='JC'
          testimonio='Lorem' 
        />,
        <Testimonio
          name='X'
          country='X'
          imagen='1'
          cargo='Ingeniero X'
          empresa='JC'
          testimonio='Lorem' 
        />,
        <Testimonio
          name='X'
          country='X'
          imagen='1'
          cargo='Ingeniero X'
          empresa='JC'
          testimonio='Lorem' 
        />
    ]
    return(
        <div>
            <h1 className='tittle'>Testimonios</h1>
            {test}
        </div>
        
    )
} 


export default Testimonios;
