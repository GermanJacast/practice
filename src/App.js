import logo from './logo.svg';
import './App.css';
import { Testimonios } from './components/Testimonio';
import { Contenido } from './components/Contenido';
import { Cosas } from './components/Cosas';
import { CosaDetails } from './components/CosasDetails';
import { Login } from './components/Login';
import { Contador } from './components/ContadorClick';
import {Calculadora} from './components/Calculadora';

import { Link, NavLink, Route, Routes, useParams, Outlet, Navigate, useNavigate, useLocation} from 'react-router-dom'

// 
const Home = () => <h1>Home</h1>

function App() {
  return (
    <div className="App">

      <header>
        <div className='navi'>
          <h1>Jacasth</h1>
          <nav>
            <ul>
              {/*  */}
              {/* <li><a href='/'>Home</a></li>
              <li><a href='/ contenido'>Contenido</a></li> */}
              {/* Pagina spa (Navegacion sin - a href - no recarga la pagina (resumen)) */}
              <li><Link to='/'>Home</Link></li>
              {/* NavLink ya incluye la clase active */}
              <li><NavLink to='/testimonio'>Testimonio</NavLink></li>
              <li><NavLink to='/contenido'>Contenido</NavLink></li>
              <li><NavLink to='/contadorClick'>Contador</NavLink></li>
              <li><NavLink to='/calculadora'>Calculadora</NavLink></li>
            </ul>
          </nav>
        </div>
      </header> 
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* ProtectedRoute para rutas protegidas */}
        {/* <Route path='/contenido' element={<ProtectedRoute><Contenido/></ProtectedRoute>}/> */}
        <Route path='/contenido' element={<Contenido />}/>
        {/* segmento dinamico */}
        <Route path='/cosas/:name' element={<Cosas />}>
          {/* Ruta anidada */}
          <Route path='details' element={<CosaDetails />} />
        </Route>
        <Route path='/testimonio' element={<Testimonios />} />
        <Route path='/contadorClick' element={<Contador />} />
        <Route path='/calculadora' element={<Calculadora />} />
        <Route path='/login' element={<Login />} />
        {/* 404 soft */}
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      
    </div>
  );
}

export default App;
