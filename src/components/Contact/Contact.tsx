// src/components/Contact/Contact.tsx
'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { Loader2 } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  // Estado para manejar la carga y los mensajes de éxito/error
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Actualiza el estado cuando el usuario escribe
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Limpiar formulario
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>¿Hablamos?</h2>
          <p className={styles.subtitle}>
            Completá el formulario y te contactamos en menos de 24 horas para ayudarte a configurar tu negocio.
          </p>
        </div>

        <div className={styles.formWrapper}>
          {status === 'success' ? (
            <div className={styles.successMessage}>
              <h3>¡Mensaje enviado con éxito!</h3>
              <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.grid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input} 
                    placeholder="Juan Pérez" 
                    required 
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input} 
                    placeholder="juan@tunegocio.com" 
                    required 
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Teléfono / WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input} 
                  placeholder="+54 9 11 1234-5678" 
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea} 
                  rows={4} 
                  placeholder="Contanos qué tipo de negocio tenés y qué necesitas gestionar..." 
                  required 
                ></textarea>
              </div>

              {status === 'error' && (
                <p className={styles.errorMessage}>
                  Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
                </p>
              )}

              <button type="submit" className={styles.submitButton} disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    <Loader2 className={styles.spinner} size={20} />
                    Enviando...
                  </>
                ) : (
                  'Enviar mensaje'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}