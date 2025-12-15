import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    colaboradores: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with backend or email service
    console.log("Form submitted", formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page section-padding">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          
          {/* Contact Info */}
          <div>
            <h1 style={{ marginBottom: '24px' }}>Fale com um especialista</h1>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: '40px' }}>
              Estamos prontos para entender sua necessidade e desenhar a melhor solução de viagens para sua empresa.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <Mail color="var(--color-primary)" />
                    <div>
                        <strong style={{ display: 'block', marginBottom: '4px' }}>E-mail</strong>
                        <span style={{ color: 'var(--color-text-secondary)' }}>contato@azulcorporativo.com.br</span>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <Phone color="var(--color-primary)" />
                    <div>
                        <strong style={{ display: 'block', marginBottom: '4px' }}>Telefone / WhatsApp</strong>
                        <span style={{ color: 'var(--color-text-secondary)' }}>(11) 99999-9999</span>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <Clock color="var(--color-primary)" />
                    <div>
                        <strong style={{ display: 'block', marginBottom: '4px' }}>Horário de Atendimento</strong>
                        <span style={{ color: 'var(--color-text-secondary)' }}>Segunda a Sexta, das 8h às 19h</span>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <MapPin color="var(--color-primary)" />
                    <div>
                        <strong style={{ display: 'block', marginBottom: '4px' }}>Endereço</strong>
                        <span style={{ color: 'var(--color-text-secondary)' }}>Av. Paulista, 1000 - São Paulo, SP</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ backgroundColor: 'var(--color-accent)', padding: '40px', borderRadius: 'var(--radius-lg)' }}>
            {submitted ? (
                <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ color: 'var(--color-success)', marginBottom: '16px' }}>Mensagem enviada com sucesso!</h3>
                    <p>Em breve nosso time técnico entrará em contato.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label className="label" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Nome Completo</label>
                        <input required type="text" name="nome" placeholder="Seu nome" onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                    </div>
                    <div>
                        <label className="label" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Corporativo</label>
                        <input required type="email" name="email" placeholder="voce@empresa.com.br" onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <label className="label" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Empresa</label>
                            <input required type="text" name="empresa" placeholder="Nome da empresa" onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                        </div>
                        <div>
                            <label className="label" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Nº Colaboradores</label>
                            <select name="colaboradores" onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'white' }}>
                                <option value="">Selecione</option>
                                <option value="1-10">1-10</option>
                                <option value="11-50">11-50</option>
                                <option value="51-200">51-200</option>
                                <option value="+200">+200</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="label" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Telefone / WhatsApp</label>
                        <input required type="tel" name="telefone" placeholder="(00) 00000-0000" onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                    </div>
                    <div>
                        <label className="label" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Como podemos ajudar?</label>
                        <textarea required name="mensagem" rows="4" placeholder="Conte um pouco sobre as necessidades de viagens da sua empresa" onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontFamily: 'inherit' }}></textarea>
                    </div>
                    <Button type="submit" variant="primary" style={{ width: '100%', padding: '16px' }}>Solicitar Proposta</Button>
                </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
