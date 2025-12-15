import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'white', position: 'relative' }}>
      <div className="container header-container">
        <Link to="/" style={{ fontSize: '20px', fontWeight: '800', fontFamily: 'var(--font-family-heading)', color: 'var(--color-primary)' }}>
          AZUL CORPORATIVO
        </Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/solucoes">Soluções</Link>
          <Link to="/como-funciona">Como Funciona</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/conteudos">Conteúdos</Link>
          <Link to="/contato" className="btn btn-primary">Solicitar proposta</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <X size={28} color="var(--color-primary)" /> : <Menu size={28} color="var(--color-primary)" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
            <nav className="mobile-menu">
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/solucoes" onClick={toggleMenu}>Soluções</Link>
                <Link to="/como-funciona" onClick={toggleMenu}>Como Funciona</Link>
                <Link to="/sobre" onClick={toggleMenu}>Sobre</Link>
                <Link to="/conteudos" onClick={toggleMenu}>Conteúdos</Link>
                <Link to="/contato" className="btn btn-primary" onClick={toggleMenu} style={{ justifyContent: 'center' }}>Solicitar proposta</Link>
            </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
