import React from 'react';
import { TrendingDown, Clock, Wallet, Headset } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        { 
            icon: <TrendingDown size={28} />, 
            title: "Controle de Custos", 
            text: "Política de viagens inteligente e negociação com fornecedores para reduzir gastos operacionais." 
        },
        { 
            icon: <Clock size={28} />, 
            title: "Otimização de Tempo", 
            text: "Cotações, emissões e gestão de mudanças realizadas por especialistas dedicados." 
        },
        { 
            icon: <Wallet size={28} />, 
            title: "Gestão Financeira", 
            text: "Centralização de faturamento e relatórios detalhados para eliminação de reembolsos manuais." 
        },
        { 
            icon: <Headset size={28} />, 
            title: "Suporte Humanizado", 
            text: "Atendimento ágil multicanal: WhatsApp, e-mail ou telefone com quem conhece sua empresa." 
        }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                        Por que escolher a BlueViagem
                    </span>
                    <h2 style={{ maxWidth: '700px', margin: '16px auto 0' }}>
                        Expertise em gestão de viagens para PMEs
                    </h2>
                </div>
                
                <div className="grid-2" style={{ 
                    alignItems: 'stretch',
                    gap: '32px' 
                }}>
                    {benefits.map((item, index) => (
                        <div key={index} className="card" style={{ 
                            textAlign: 'left', // Corporate style often aligns left
                            alignItems: 'flex-start',
                            padding: '32px'
                        }}>
                            <div style={{ 
                                marginBottom: '24px', 
                                display: 'inline-flex', 
                                padding: '16px', 
                                borderRadius: '50%', 
                                backgroundColor: 'var(--color-accent)', // Warm Cream
                                color: 'var(--color-primary)'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-primary)' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', margin: 0 }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
