import React from 'react';
import Button from '../components/ui/Button';

const Content = () => {
    const articles = [
        { title: "Como criar uma política de viagens eficiente", date: "10 Dez 2024", summary: "Guia completo para definir regras que economizam dinheiro sem tirar o conforto do colaborador." },
        { title: "5 dicas para reduzir custos com hotéis corporativos", date: "05 Dez 2024", summary: "Negociações, antecedência e outros segredos para pagar menos na hospedagem." },
        { title: "A importância do seguro viagem para colaboradores", date: "01 Dez 2024", summary: "Por que não arriscar e como escolher a melhor cobertura para sua equipe." },
        { title: "Tendências em viagens corporativas para 2025", date: "20 Nov 2024", summary: "O que esperar do futuro das viagens de negócios: tecnologia e sustentabilidade." },
        { title: "Como fazer a prestação de contas perfeita", date: "15 Nov 2024", summary: "Dicas para o financeiro e para o viajante evitarem dores de cabeça com notas fiscais." },
        { title: "Bleisure: O que é e como aplicar na sua empresa", date: "10 Nov 2024", summary: "A união de negócios e lazer como benefício para colaboradores." }
    ];

    return (
        <div className="content-page">
            <div className="section-padding text-center" style={{ backgroundColor: 'var(--color-accent)' }}>
                <div className="container">
                    <h1 className="mb-lg">Conteúdos e Insights</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: 'var(--color-text-secondary)' }}>
                        Informação estratégica para quem gere viagens e negócios.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    {articles.map((a, i) => (
                        <div key={i} style={{ padding: '32px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', transition: 'border-color 0.2s', backgroundColor: 'white' }}>
                            <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: '500' }}>{a.date}</span>
                            <h2 style={{ fontSize: '22px', margin: '12px 0 16px', lineHeight: '1.3', color: 'var(--color-primary)' }}>{a.title}</h2>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginBottom: '24px' }}>{a.summary}</p>
                            <Button variant="outline" style={{ border: 'none', padding: '0', color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'underline' }}>Ler na íntegra →</Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Content;
