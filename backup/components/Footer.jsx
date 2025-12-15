import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-accent)', padding: '60px 0', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Azul Corporativo Viagens</h3>
          <p>© 2025 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
