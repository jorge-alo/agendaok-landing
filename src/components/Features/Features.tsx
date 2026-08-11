// src/components/Features/Features.tsx
import { 
  CalendarCheck, 
  MessageCircle, 
  CreditCard, 
  Users, 
  BarChart3, 
  Link2 
} from 'lucide-react';
import styles from './Features.module.css';

// Definimos la data de forma centralizada
const features = [
  {
    icon: CalendarCheck,
    title: "Reservas 24/7",
    description: "Tus clientes agendan solos desde su celular, incluso cuando tu negocio está cerrado."
  },
  {
    icon: MessageCircle,
    title: "Recordatorios por WhatsApp",
    description: "Enviá recordatorios automáticos y reducí las ausencias (no-shows) hasta en un 80%."
  },
  {
    icon: CreditCard,
    title: "Cobro de Señas Automático",
    description: "Pedí una seña para confirmar el turno. Menos ausencias, ingresos asegurados."
  },
  {
    icon: Users,
    title: "Multi-Empleado",
    description: "Gestioná a todo tu equipo en una sola agenda. Cada uno con su propio calendario y comisiones."
  },
  {
    icon: BarChart3,
    title: "Reportes Inteligentes",
    description: "Sabé exactamente cuánto facturás, qué servicios se venden más y quiénes son tus mejores clientes."
  },
  {
    icon: Link2,
    title: "Tu propia página de reservas",
    description: "Te damos un link (ej: reservas.agendaok.com.ar/tu-negocio) para compartir en tu Instagram y WhatsApp."
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Todo lo que necesitás para crecer</h2>
          <p className={styles.subtitle}>
            Dejá de usar papel, Excel y perder horas en el celular. AgendaOK automatiza tu negocio.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.iconWrapper}>
                <feature.icon size={28} strokeWidth={2} />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}