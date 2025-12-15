import React from 'react';
import Card from '../ui/Card';

const Testimonials = () => {
    const testimonials = [
        { name: "Mariana Souza", role: "Gerente de RH", company: "TechSolutions", text: "A Azul Corporativo transformou nossa forma de viajar. Agilidade e suporte impecáveis." },
        { name: "Carlos Mendes", role: "Diretor Comercial", company: "Indústria ABC", text: "Reduzimos 20% dos custos com viagens já no primeiro trimestre. Recomendo." },
        { name: "Fernanda Lima", role: "CEO", company: "Consultoria Prime", text: "O atendimento humano faz toda a diferença quando temos imprevistos no aeroporto." }
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-accent)' }}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '48px' }}>Empresas que já contam conosco</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {testimonials.map((t, i) => (
                        <Card key={i}>
                            <p style={{ fontStyle: 'italic', marginBottom: '24px', color: 'var(--color-text-secondary)', fontSize: '16px' }}>"{t.text}"</p>
                            <div>
                                <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '18px' }}>{t.name}</strong>
                                <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>{t.role}, {t.company}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
