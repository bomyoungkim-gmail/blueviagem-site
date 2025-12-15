import React from 'react';

const HowItWorksSummary = () => {
    const steps = [
        { num: '01', title: "Entendimento", text: "Você nos conta as necessidades e volume de viagens da sua empresa." },
        { num: '02', title: "Proposta", text: "Apresentamos um modelo de atendimento e política sob medida." },
        { num: '03', title: "Setup", text: "Cadastramos os viajantes e configuramos os fluxos de aprovação." },
        { num: '04', title: "Acolhimento", text: "Sua equipe começa a viajar com nosso suporte total." }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="text-center mb-lg">Como funciona na prática</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', marginTop: '48px' }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <div style={{ 
                                fontSize: '48px', 
                                fontWeight: '800', 
                                color: 'rgba(0, 64, 128, 0.1)', 
                                lineHeight: '1',
                                marginBottom: '-20px',
                                position: 'relative',
                                zIndex: '0'
                            }}>
                                {step.num}
                            </div>
                            <h3 style={{ fontSize: '20px', marginBottom: '12px', position: 'relative', zIndex: '1' }}>{step.title}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSummary;
