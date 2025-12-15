import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import HowItWorks from './pages/HowItWorks';
import AboutUs from './pages/AboutUs';
import Content from './pages/Content';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="solucoes" element={<Solutions />} />
          <Route path="como-funciona" element={<HowItWorks />} />
          <Route path="sobre" element={<AboutUs />} />
          <Route path="conteudos" element={<Content />} />
          <Route path="contato" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
