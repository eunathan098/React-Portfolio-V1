import './App.css'

// Roteamento de endpoints
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/Contato';
import Projetos from './pages/Projetos';
import Home from './pages/Home';
import Principal from './pages/Principal';

function App() {
  return (
    <BrowserRouter basename="/React-Portfolio-V1">
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/projetos' element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
