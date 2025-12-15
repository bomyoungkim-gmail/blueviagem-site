import React from 'react';
import { ClipboardList, Settings, Users, MessageCircle, FileText } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <ClipboardList size={32} />,
            title: "1. Diagnóstico e Onboarding",
            text: "Entendemos o volume de viagens, principais destinos e necessidades da sua equipe. Cadastramos sua empresa e colaboradores em nosso sistema."
        },
        {
            icon: <Settings size={32} />,
            title: "2. Definição da Política",
            text: "Configuramos as regras: antecedência mínima, tetos de valores por cargo, fluxo de aprovação e centros de custo. Tudo automatizado."
        },
        {
            icon: <MessageCircle size={32} />,
            title: "3. Solicitações e Atendimento",
            text: "Seu time solicita via e-mail, WhatsApp ou Portal. Nossa equipe ou sistema oferece as melhores opções dentro da política em minutos."
        },
        {
            icon: <FileText size={32} />,
            title: "4. Pagamento e Relatórios",
            text: "Faturamento centralizado (boleto/cartão) com prazos negociados. Envio mensal de relatórios detalhados para controle total do financeiro."
        }
    ];

    return (
        <div className="how-it-works-page">
            <div className="section-padding text-center" style={{ backgroundColor: 'var(--color-accent)' }}>
                <div className="container">
                    <h1 className="mb-lg">Como Funciona</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: 'var(--color-text-secondary)' }}>
                        Um processo desenhado para tirar o peso operacional das costas do seu time. Simples, transparente e eficiente.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Linha vertical conectando os passos (apenas visual em desktop se der tempo, simplificado aqui) */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                        {steps.map((step, index) => (
                            <div key={index} style={{ display: 'flex', gap: '24px' }}>
                                <div style={{ 
                                    flexShrink: 0, 
                                    width: '64px', 
                                    height: '64px', 
                                    borderRadius: '50%', 
                                    backgroundColor: 'var(--color-primary)', 
                                    color: 'white', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--color-primary)' }}>{step.title}</h3>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
