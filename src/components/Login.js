import {useAuth} from '../useAuth.js'
import { Navigate, useNavigate, useLocation} from 'react-router-dom'

// Login, arreglar para su correcto funcionamiento
export const Login = () => {
    const login = useAuth()
    const navigate = useNavigate()
    const state = useLocation()
    
    window.alert(useAuth())
    const handleClick = () =>{
      login()
      navigate(state?.location?.pathname ?? '/')
    }
    return(
    <button onClick={handleClick}>Login</button>
    )
  }
  // Rutas protegidas
export  const ProtectedRoute = ({children}) =>{
    const isAuthenticated = useAuth()
    const location = useLocation()
  
    if (!isAuthenticated){
      // state podria mandar imagen y mas informacion...etc
      return <Navigate to='/login' state={{location}}/>
    }
    return children
  }
  // 

export default Login;