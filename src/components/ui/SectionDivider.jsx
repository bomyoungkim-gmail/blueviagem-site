import React from 'react';

const SectionDivider = ({ image, title, subtitle }) => {
  return (
    <section style={{ 
        position: 'relative', 
        height: '400px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundAttachment: 'fixed', // Parallax effect
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: 'white'
    }}>
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(19, 41, 61, 0.7)', // Overlay
          zIndex: 0
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {title && <h2 style={{ color: 'white', marginBottom: '16px', fontSize: '2.5rem' }}>{title}</h2>}
        {subtitle && <p style={{ color: 'var(--color-accent)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>{subtitle}</p>}
      </div>
    </section>
  );
};

export default SectionDivider;
