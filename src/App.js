import React from "react"; 
import {Routes,  Route, Link} from 'react-router-dom' 
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Catalogo from './components/pages/Catalogo';


function App() {
  return (
    <>
      <header>
        <Link to='/login'>Login</Link>
        <Link to='/cadastro'>Cadastro</Link>
        <Link to='/catalogo'>Catalogo</Link>
      </header>

      <main>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/catalogo' element={<Catalogo/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
