import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

const SolutionsOverview = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-accent)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2>Soluções pensadas para a realidade das PMEs</h2>
                    <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)' }}>Atendemos as necessidades de quem decide e de quem organiza.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                    {/* Card Gestores */}
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--color-primary)' }}>Para Gestores e Diretores</h3>
                        <p style={{ color: 'var(--color-secondary)', fontWeight: '600', marginBottom: '24px' }}>Visão estratégica e economia</p>
                        <ul style={{ marginBottom: '32px' }}>
                            {['Relatórios de economia e gastos por centro de custo','Controle total do orçamento de viagens','Política de viagens personalizada','Aprovação simples e rápida'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' }}>
                                    <CheckCircle size={20} color="var(--color-success)" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card RH/Financeiro */}
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--color-primary)' }}>Para RH e Financeiro</h3>
                        <p style={{ color: 'var(--color-secondary)', fontWeight: '600', marginBottom: '24px' }}>Organização e processos eficientes</p>
                        <ul style={{ marginBottom: '32px' }}>
                            {['Centralização de todas as reservas','Faturamento mensal e prazos centralizados','Fim dos reembolsos complexos','Suporte ágil para os colaboradores'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' }}>
                                    <CheckCircle size={20} color="var(--color-success)" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '48px' }}>
                    <Button to="/solucoes" variant="outline" style={{ border: '2px solid var(--color-primary)', color: 'var(--color-primary)', padding: '12px 32px' }}>
                        Ver todas as soluções
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SolutionsOverview;
