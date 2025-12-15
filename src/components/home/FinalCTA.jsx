import React from 'react';
import Button from '../ui/Button';

const FinalCTA = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ color: 'white', marginBottom: '16px', fontSize: '32px' }}>Pronto para organizar as viagens da sua empresa?</h2>
                <p style={{ marginBottom: '32px', fontSize: '18px', opacity: '0.9' }}>Fale com nossos especialistas e receba uma proposta personalizada.</p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button to="/contato" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Solicitar proposta</Button>
                    <Button href="https://wa.me/" target="_blank" style={{ border: '2px solid white', color: 'white', backgroundColor: 'transparent' }}>Falar no WhatsApp</Button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
