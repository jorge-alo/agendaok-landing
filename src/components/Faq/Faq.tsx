// src/components/FAQ/FAQ.tsx
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Faq.module.css';
import FadeIn from '../FadeIn/FadeIn';

const faqs = [
  {
    question: "¿Necesito conocimientos técnicos para usarlo?",
    answer: "No, para nada. AgendaOK está diseñado para dueños de negocios, no para programadores. Si sabes usar WhatsApp y mandar un mail, sabés usar AgendaOK. Además, te acompañamos en la configuración inicial."
  },
  {
    question: "¿Hay permanencia mínima o puedo cancelar cuando quiera?",
    answer: "No hay permanencia. Podés cancelar tu suscripción en cualquier momento con un solo clic desde tu panel. Si cancelás, mantenés el acceso hasta el final del período que ya pagaste."
  },
  {
    question: "¿Los recordatorios por WhatsApp están incluidos en el precio?",
    answer: "Sí, el envío de recordatorios por WhatsApp está 100% incluido en los $15.000 ARS/mes. No cobramos extras por mensaje enviado. Enviá todos los recordatorios que necesites."
  },
  {
    question: "¿Puedo gestionar varios empleados o sucursales?",
    answer: "¡Sí! El plan único incluye empleados ilimitados. Cada empleado puede tener su propio calendario, horarios y servicios, todo visible para vos desde un solo panel de administración."
  },
  {
    question: "¿Qué pasa si lo pruebo y no me convence?",
    answer: "Tienes 30 días de prueba completamente gratis y sin tarjeta de crédito. Si en esos 30 días no te enamorás del sistema, simplemente no lo usás más y no pagás nada. Sin vueltas ni reclamos."
  }
];

export default function FAQ() {
  // Estado para guardar el índice de la pregunta abierta (-1 = ninguna abierta)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.header}>
            <h2 className={styles.title}>Preguntas Frecuentes</h2>
            <p className={styles.subtitle}>
              Todo lo que necesitas saber antes de empezar. Si tienes otra duda, escribinos por WhatsApp.
            </p>
          </div>
        </FadeIn>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div key={index} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                  {/* Botón de la pregunta */}
                  <button
                    className={styles.questionButton}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>{faq.question}</span>
                    <div className={styles.iconWrapper}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  {/* Contenido desplegable */}
                  <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}>
                    <div className={styles.answerInner}>
                      <p className={styles.answerText}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}