import { useParams} from 'react-router-dom'
import '../css/cosasDetails.css';

export const CosaDetails = () => {
    const {name} = useParams()
    return(
      <div className='container-cosasDetails'>
        <h1>Detalle de {name}</h1>
      </div>
    
  )}

export default CosaDetails;