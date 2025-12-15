import React from 'react';
import { Plane, Building, Car, Calendar, BarChart2 } from 'lucide-react';
import Button from '../components/ui/Button';

const Solutions = () => {
  const services = [
    {
      icon: <Plane size={40} color="var(--color-primary)" />,
      title: "Passagens Aéreas",
      description: "Acesso a tarifas corporativas negociadas em voos nacionais e internacionais. Sistema inteligente que compara opções para garantir o melhor custo-benefício, respeitando a política da sua empresa."
    },
    {
      icon: <Building size={40} color="var(--color-primary)" />,
      title: "Hospedagem",
      description: "Ampla rede hoteleira com condições especiais. Gestão centralizada de reservas, check-in e pagamentos, eliminando a necessidade de adiantamentos ou uso de cartão pessoal do viajante."
    },
    {
      icon: <Car size={40} color="var(--color-primary)" />,
      title: "Mobilidade e Transfers",
      description: "Locação de veículos e contratação de transfers executivos. Segurança e pontualidade para o deslocamento dos seus colaboradores em qualquer lugar do Brasil."
    },
    {
      icon: <Calendar size={40} color="var(--color-primary)" />,
      title: "Eventos e Feiras",
      description: "Logística completa para participação em feiras, congressos e treinamentos. Cuidamos das passagens, hospedagem e traslados para grupos de todos os tamanhos."
    },
    {
      icon: <BarChart2 size={40} color="var(--color-primary)" />,
      title: "Gestão e Relatórios",
      description: "Ferramentas de aprovação e relatórios gerenciais detalhados. Tenha visibilidade total dos gastos por centro de custo, projeto ou viajante em tempo real."
    }
  ];

  return (
    <div className="solutions-page">
      <div className="section-padding" style={{ backgroundColor: 'var(--color-accent)' }}>
        <div className="container text-center">
            <h1 className="mb-lg">Nossas Soluções</h1>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px', color: 'var(--color-text-secondary)' }}>
                Oferecemos um ecossistema completo para simplificar as viagens da sua empresa, do planejamento ao relatório final.
            </p>
        </div>
      </div>

      <div className="container section-padding">
        {services.map((service, index) => (
            <div key={index} style={{ 
                display: 'flex', 
                gap: '40px', 
                alignItems: 'center', 
                marginBottom: '60px', 
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: 1, padding: '24px', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                     <div style={{ marginBottom: '24px' }}>{service.icon}</div>
                     <h2 style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>{service.title}</h2>
                     <p style={{ lineHeight: '1.6', color: 'var(--color-text-secondary)', fontSize: '16px' }}>{service.description}</p>
                </div>
                {/* Decorative / Spacer div if needed or illustration placeholder */}
                <div style={{ flex: 1, minHeight: '200px', backgroundColor: 'var(--color-accent)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <span style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}>Imagem Ilustrativa {service.title}</span>
                </div>
            </div>
        ))}
      </div>

      <div className="section-padding" style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
            <h2 style={{ color: 'white', marginBottom: '24px' }}>Quer saber como podemos ajudar sua empresa especificamente?</h2>
            <Button to="/contato" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Agendar reunião de diagnóstico</Button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
