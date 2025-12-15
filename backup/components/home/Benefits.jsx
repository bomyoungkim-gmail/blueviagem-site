import React from 'react';
import { TrendingDown, Clock, Wallet, Headset } from 'lucide-react';
import Card from '../ui/Card';

const Benefits = () => {
    const benefits = [
        { 
            icon: <TrendingDown size={32} color="var(--color-primary)" />, 
            title: "Controle de custos", 
            text: "Política de viagens inteligente e negociação com fornecedores para reduzir gastos." 
        },
        { 
            icon: <Clock size={32} color="var(--color-primary)" />, 
            title: "Economia de tempo", 
            text: "Deixe as cotações, emissões e remarcações com nossa equipe especializada." 
        },
        { 
            icon: <Wallet size={32} color="var(--color-primary)" />, 
            title: "Suporte ao Financeiro", 
            text: "Fim da dor de cabeça com recibos espalhados. Faturamento centralizado e relatórios." 
        },
        { 
            icon: <Headset size={32} color="var(--color-primary)" />, 
            title: "Atendimento + Tecnologia", 
            text: "O melhor dos dois mundos: agilidade digital com suporte humano quando preciso." 
        }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '48px', maxWidth: '800px', margin: '0 auto 48px' }}>
                    O que sua empresa ganha com uma agência especializada em PMEs
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
                    {benefits.map((item, index) => (
                        <Card key={index} style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ marginBottom: '24px', display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--color-primary)' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{item.text}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
