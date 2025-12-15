import React from 'react';
import { Quote } from 'lucide-react';


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
                        <div key={i} style={{ padding: '0 16px' }}>
                            <Quote size={32} color="var(--color-primary)" style={{ opacity: 0.2, marginBottom: '16px' }} />
                            <p style={{ 
                                fontStyle: 'italic', 
                                marginBottom: '24px', 
                                color: 'var(--color-text-main)', 
                                fontSize: '1.125rem',
                                lineHeight: '1.6'
                            }}>"{t.text}"</p>
                            <div>
                                <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '1rem' }}>{t.name}</strong>
                                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{t.role}, {t.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
