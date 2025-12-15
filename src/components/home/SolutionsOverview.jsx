import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

const SolutionsOverview = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-background)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ marginBottom: '16px' }}>Soluções pensadas para sua realidade</h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)' }}>
                        Nossa plataforma atende as necessidades de quem decide e de quem organiza.
                    </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '64px', flexWrap: 'wrap' }}>
                    {/* Column Gestores */}
                    <div style={{ flex: '1', minWidth: '300px', maxWidth: '500px' }}>
                        <div style={{ width: '48px', height: '4px', backgroundColor: 'var(--color-primary)', marginBottom: '24px' }} />
                        <h3 className="mb-sm" style={{ color: 'var(--color-primary)', fontSize: '1.75rem' }}>Gestores e Diretores</h3>
                        <p className="mb-lg" style={{ color: 'var(--color-text-secondary)', fontWeight: '500', fontSize: '1.1rem' }}>
                            Visão estratégica, controle e economia para a empresa.
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {['Relatórios detalhados por centro de custo','Controle total do budget de viagens','Compliance com política de viagens','Approval workflows simplificados'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: '1rem' }}>
                                    <CheckCircle size={20} color="var(--color-primary)" style={{ flexShrink: 0, opacity: 0.8 }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column RH/Financeiro */}
                    <div style={{ flex: '1', minWidth: '300px', maxWidth: '500px' }}>
                        <div style={{ width: '48px', height: '4px', backgroundColor: 'var(--color-accent)', marginBottom: '24px' }} />
                        <h3 className="mb-sm" style={{ color: 'var(--color-primary)', fontSize: '1.75rem' }}>RH e Financeiro</h3>
                        <p className="mb-lg" style={{ color: 'var(--color-text-secondary)', fontWeight: '500', fontSize: '1.1rem' }}>
                            Processos eficientes e fim da burocracia.
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {['Centralização de todas as reservas','Faturamento unificado mensal','Eliminação de reembolsos complexos','Suporte proativo aos viajantes'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: '1rem' }}>
                                    <CheckCircle size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                                    <span style={{ color: 'var(--color-primary)' }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '64px' }}>
                    <Button href="#contato" variant="secondary" className="btn-secondary">
                        Fale com um especialista
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SolutionsOverview;
