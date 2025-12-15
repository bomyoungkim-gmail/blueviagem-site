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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {articles.map((a, i) => (
                        <div key={i} style={{ padding: '32px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', transition: 'border-color 0.2s', backgroundColor: 'white' }}>
                            <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: '500' }}>{a.date}</span>
                            <h3 style={{ fontSize: '20px', margin: '12px 0 24px', lineHeight: '1.4' }}>{a.title}</h3>
                            <Button to="/conteudos" variant="white" style={{ border: 'none', padding: '0', color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none' }}> Ler artigo →</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContentTeaser;
