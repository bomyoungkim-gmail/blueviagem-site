import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-primary)' }}>
      {/* Background Image with Overlay */}
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/hero-new.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4, // Darken background to let text pop
          zIndex: 0
      }} />
      
      {/* Gradient Overlay for Readability */}
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, var(--color-primary) 0%, rgba(19, 41, 61, 0.8) 50%, rgba(19, 41, 61, 0.4) 100%)',
          zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '120px var(--spacing-lg) 160px' }}>
         <div style={{ maxWidth: '700px' }}>
          <span style={{ 
              color: 'var(--color-accent)', 
              fontWeight: '600', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              fontSize: '0.875rem',
              display: 'block',
              marginBottom: '24px',
              borderLeft: '4px solid var(--color-accent)',
              paddingLeft: '16px'
          }}>
            Gestão Corporativa Premium
          </span>
          
          <h1 style={{ 
              marginBottom: '32px', 
              color: 'white', 
              fontSize: '3.5rem', 
              letterSpacing: '-0.02em',
              lineHeight: '1.1' 
          }}>
            A excelência que sua empresa merece em cada viagem.
          </h1>
          
          <p className="mb-xl" style={{ 
              fontSize: '1.25rem', 
              maxWidth: '540px', 
              lineHeight: '1.6', 
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '48px'
          }}>
            Simplifique processos, reduza custos e garanta o conforto da sua equipe com nossa consultoria especializada.
          </p>
          
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Button href="#contato" className="btn" style={{ 
                backgroundColor: 'var(--color-accent)', 
                color: 'var(--color-primary)',
                padding: '16px 32px',
                fontSize: '1rem'
            }}>
              Planejar viagem <ArrowRight size={20} style={{ marginLeft: '12px' }} />
            </Button>
            <Button href="#solucoes" variant="outline" style={{ 
                border: '1px solid rgba(255,255,255,0.3)', 
                color: 'white',
                padding: '16px 32px'
            }}>
              Conhecer soluções
            </Button>
          </div>
         </div>

         {/* Floating detail card at bottom right (Design Preview element) */}
         <div style={{
            position: 'absolute',
            bottom: '48px',
            right: 'var(--spacing-lg)',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            padding: '24px 32px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            zIndex: 3,
            display: 'none', // Hide on mobile
            maxWidth: '300px'
         }} className="desktop-only">
            <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '8px', fontSize: '0.875rem' }}>Destaque</p>
            <p style={{ color: 'white', fontSize: '0.95rem', margin: 0 }}>
                Monitoramento 24/7 de todos os bilhetes emitidos.
            </p>
         </div>
      </div>

      {/* CSS to handle desktop-only visibility inline for simplicity */}
      <style>{`
        @media (min-width: 1024px) { .desktop-only { display: block !important; } }
        @media (max-width: 768px) { h1 { font-size: 2.5rem !important; } }
      `}</style>
    </section>
  );
};

export default Hero;
