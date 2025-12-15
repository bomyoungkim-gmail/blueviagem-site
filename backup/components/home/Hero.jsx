import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundColor: 'var(--color-accent)', padding: '80px 0 100px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '48px', marginBottom: '24px', color: 'var(--color-primary)' }}>
              Viagens corporativas sob medida para pequenas e médias empresas
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: '32px', lineHeight: '1.6' }}>
              Reduza custos, ganhe tempo e deixe que nossa equipe cuide de toda a logística de viagens da sua empresa.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button to="/contato" variant="primary">Solicitar proposta</Button>
              <Button href="https://wa.me/" target="_blank" variant="secondary">Falar com um especialista</Button>
            </div>
            <p style={{ marginTop: '24px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
              Atendendo empresas de tecnologia, serviços, saúde e indústria em todo o Brasil.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src="/hero-image.jpg" 
              alt="Equipe de viagens corporativas" 
              style={{ 
                borderRadius: 'var(--radius-lg)', 
                boxShadow: 'var(--shadow-lg)',
                width: '100%',
                objectFit: 'cover',
                maxHeight: '500px'
              }} 
            />
            {/* Decorative background element could go here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
