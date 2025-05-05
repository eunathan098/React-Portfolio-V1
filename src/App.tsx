import './App.css'

// Roteamento de endpoints
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/Contato';
import Projetos from './pages/Projetos';
import Home from './pages/Home';
import Principal from './pages/Principal';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Principal></Principal>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/contato' element={<Contato></Contato>}></Route>
          <Route path='/projetos' element={<Projetos></Projetos>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
