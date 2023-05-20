import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import Inicio from './pages/Inicio';
import Profesionales from './pages/Profesionales';
import Psicoeducacion from './pages/Psicoeducacion';
import Chat from './pages/Chat';
import Acerca from './pages/Acerca';
import NovedadesPage from './pages/NovedadesPage';





import Ansiedad from './pages/psicoeducacion/Ansiedad';
import Depresion from './pages/psicoeducacion/Depresion';
import Duelo from './pages/psicoeducacion/Duelo';
import Trauma from './pages/psicoeducacion/Trauma';
import Personalidad from './pages/psicoeducacion/Personalidad';
import Creatividad from './pages/psicoeducacion/Creatividad';
import Terapiacog from './pages/psicoeducacion/Terapiacog';
import Psicoanalisis from './pages/psicoeducacion/Psicoanalisis';


function App() {
  
  return (
    <div className="App">
      <Header/>

      <Router>
        <Nav/>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="psicoeducacion" element={<Psicoeducacion />} />
          <Route path="ansiedad" element={<Ansiedad />} />
          <Route path="depresion" element={<Depresion />} />
          <Route path="duelo" element={<Duelo />} />
          <Route path="trauma" element={<Trauma />} />
          <Route path="personalidad" element={<Personalidad />} />
          <Route path="creatividad" element={<Creatividad />} />
          <Route path="terapiacog" element={<Terapiacog />} />
          <Route path="psicoanalisis" element={<Psicoanalisis />} />
          <Route path="acerca" element={<Acerca />} />
          <Route path="profesionales" element={<Profesionales />} />
          <Route path="chat" element={<Chat />} />
          <Route path="publicaciones" element={<NovedadesPage />} />

        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
