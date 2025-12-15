import React from 'react';
import Button from '../ui/Button';

const ContentTeaser = () => {
    const articles = [
        { title: "Como criar uma política de viagens eficiente", date: "10 Dez 2024" },
        { title: "5 dicas para reduzir custos com hotéis corporativos", date: "05 Dez 2024" },
        { title: "A importância do seguro viagem para colaboradores", date: "01 Dez 2024" }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '48px' }}>Conteúdos para gestão de viagens</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px 32px' }}>
                    {articles.map((a, i) => (
                        <div key={i} style={{ paddingRight: '16px' }}>
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-accent)', fontWeight: '600', display: 'block', marginBottom: '8px' }}>{a.date}</span>
                            <h3 style={{ fontSize: '1.25rem', margin: '0 0 16px', lineHeight: '1.4', color: 'var(--color-primary)' }}>{a.title}</h3>
                            <Button href="#" variant="white" style={{ 
                                border: 'none', 
                                padding: '0', 
                                color: 'var(--color-text-secondary)', 
                                fontWeight: '500', 
                                textDecoration: 'underline',
                                textUnderlineOffset: '4px',
                                fontSize: '0.95rem',
                                boxShadow: 'none',
                                background: 'transparent'
                            }}> 
                                Ler artigo
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContentTeaser;
