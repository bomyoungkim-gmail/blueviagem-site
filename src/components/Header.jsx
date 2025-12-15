import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header 
      style={{ 
        backgroundColor: (scrolled && !isOpen) ? 'rgba(255, 255, 255, 0.95)' : 'white',
        backdropFilter: (scrolled && !isOpen) ? 'blur(10px)' : 'none',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        borderBottom: scrolled ? 'none' : '1px solid var(--color-border)',
        height: '80px', // Fixed height to prevent collapse
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          width: '100%'
      }}>
        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            textDecoration: 'none',
            zIndex: 1001, // Ensure logo is clickable
            flexShrink: 0 // Prevent logo from squashing,
        }}>
          <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--color-primary)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
          }}>
            <Globe size={18} />
          </div>
          <span style={{ 
              fontSize: '1.25rem', 
              fontWeight: '700', 
              color: 'var(--color-primary)',
              letterSpacing: '-0.03em',
              whiteSpace: 'nowrap'
          }}>
            BLUE<span style={{ fontWeight: '400' }}>VIAGEM</span>
          </span>
        </a>
        
        {/* Desktop Nav - Hidden on mobile/tablet via CSS class */}
        <nav className="desktop-nav" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '32px' 
        }}>
          {[
              { label: 'Home', id: 'home' },
              { label: 'Soluções', id: 'solucoes' },
              { label: 'Como Funciona', id: 'como-funciona' },
              { label: 'Conteúdos', id: 'conteudos' }
          ].map((item) => (
             <button key={item.id} onClick={() => scrollToSection(item.id)}
                style={{ 
                    color: 'var(--color-text-main)', 
                    fontWeight: '500', 
                    fontSize: '0.95rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: 'inherit'
                }}
             >
                 {item.label}
             </button>
          ))}
          <button onClick={() => scrollToSection('contato')} className="btn" style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              padding: '10px 24px',
              borderRadius: 'var(--radius-pill)',
              fontWeight: '600',
              fontSize: '0.95rem',
              cursor: 'pointer',
              border: 'none'
          }}>
              Fale com Consultor
          </button>
        </nav>

        {/* Mobile Menu Button - Visible only on mobile via CSS */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu" style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 1001
        }}>
            {isOpen ? <X size={28} color="var(--color-primary)" /> : <Menu size={28} color="var(--color-primary)" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'white',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '24px'
            }}>
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Soluções', id: 'solucoes' },
                  { label: 'Como Funciona', id: 'como-funciona' },
                  { label: 'Conteúdos', id: 'conteudos' }
                ].map((item) => (
                    <button key={item.id} onClick={() => scrollToSection(item.id)}
                        style={{ 
                            fontSize: '1.5rem', 
                            color: 'var(--color-primary)', 
                            fontWeight: '600',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {item.label}
                    </button>
                ))}
                <button onClick={() => scrollToSection('contato')} className="btn" style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '1.125rem',
                    marginTop: '16px',
                    border: 'none',
                    cursor: 'pointer'
                }}>
                    Fale com Consultor
                </button>
            </div>
        )}
      </div>
      
      {/* Responsive Styles Injection */}
      <style>{`
        @media (max-width: 1024px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 1025px) {
            .mobile-menu-btn { display: none !important; }
            .desktop-nav { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
