import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <div className="section-padding" style={{ backgroundColor: 'white' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ marginBottom: '24px' }}>Somos especialistas em fazer sua empresa ir mais longe</h1>
                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
                            A Azul Corporativo Viagens nasceu da necessidade de oferecer um atendimento de excelência para pequenas e médias empresas, um segmento muitas vezes negligenciado pelas grandes agências globais.
                        </p>
                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>
                            Acreditamos que todo negócio, independentemente do tamanho, merece acesso às melhores tarifas, tecnologia de ponta e, principalmente, um atendimento humano que resolve problemas reais em tempo real.
                        </p>
                    </div>
                    <div style={{ backgroundColor: 'var(--color-accent)', height: '400px', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         {/* Placeholder Image */}
                         <span style={{ color: 'var(--color-text-secondary)' }}>Foto da Equipe / Escritório</span>
                    </div>
                </div>
            </div>

            <div className="section-padding" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: '48px' }}>Nossos Números</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                        <div>
                            <div style={{ fontSize: '48px', fontWeight: '800', marginBottom: '8px' }}>+500</div>
                            <div>Empresas Atendidas</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '48px', fontWeight: '800', marginBottom: '8px' }}>12</div>
                            <div>Anos de Mercado</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '48px', fontWeight: '800', marginBottom: '8px' }}>98%</div>
                            <div>Satisfação dos Clientes</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
