import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', paddingTop: '64px', paddingBottom: '32px', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '48px',
            marginBottom: '64px'
        }}>
            {/* Brand */}
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                    <Globe size={24} color="var(--color-accent)" />
                    <span style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '-0.03em' }}>
                        BLUE<span style={{ fontWeight: '400' }}>VIAGEM</span>
                    </span>
                </div>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Soluções corporativas inteligentes para empresas que buscam eficiência e economia.
                </p>
            </div>

            {/* Links */}
            <div>
                <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '1rem' }}>Empresa</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li><Link to="/sobre" style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Sobre nós</Link></li>
                    <li><Link to="/solucoes" style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Soluções</Link></li>
                    <li><Link to="/conteudos" style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Blog & Conteúdos</Link></li>
                    <li><Link to="/carreiras" style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Trabalhe Conosco</Link></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '1rem' }}>Contato</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>comercial@blueviagem.com.br</li>
                    <li style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>+55 (11) 3234-5678</li>
                    <li style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Av. Paulista, 1000 - SP</li>
                </ul>
            </div>

            {/* Social */}
            <div>
                <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '1rem' }}>Siga-nos</h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <a href="#" style={{ color: 'white', opacity: 0.8 }}><Linkedin size={20} /></a>
                    <a href="#" style={{ color: 'white', opacity: 0.8 }}><Instagram size={20} /></a>
                    <a href="#" style={{ color: 'white', opacity: 0.8 }}><Facebook size={20} /></a>
                </div>
            </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', textAlign: 'center' }}>
             <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
                © 2025 Azul Corporativo Viagens. Todos os direitos reservados.
             </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
