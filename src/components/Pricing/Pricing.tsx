// src/components/Pricing/Pricing.tsx
import { Check, Sparkles } from 'lucide-react';
import styles from './Pricing.module.css';

const includedFeatures = [
  "Reservas y turnos ilimitados",
  "Empleados y servicios ilimitados",
  "Recordatorios por WhatsApp incluidos",
  "Cobro de señas automático",
  "Reportes y estadísticas avanzadas",
  "Soporte prioritario por WhatsApp"
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Un solo plan, sin letra chica</h2>
          <p className={styles.subtitle}>
            Todo lo que tu negocio necesita para crecer, por un precio simple y predecible.
          </p>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            {/* Badge superior */}
            <div className={styles.badge}>
              <Sparkles size={16} />
              <span>Plan Único</span>
            </div>

            {/* Precio */}
            <div className={styles.priceContainer}>
              <span className={styles.currency}>$</span>
              <span className={styles.amount}>15.000</span>
              <span className={styles.period}>ARS / mes</span>
            </div>

            {/* Descripción del plan */}
            <p className={styles.description}>
              Todo incluido. Sin costos ocultos ni sorpresas. Cancelás cuando quieras.
            </p>

            {/* Lista de beneficios */}
            <ul className={styles.featuresList}>
              {includedFeatures.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  <div className={styles.checkIcon}>
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Principal */}
            <div className={styles.ctaContainer}>
              <a href="#contact" className={styles.ctaButton}>
                Probar 30 días gratis
              </a>
              <p className={styles.ctaNote}>
                No pedimos tarjeta de crédito para empezar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}