// src/components/Footer/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Año dinámico

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Columna 1: Marca y Propuesta */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              Agenda<span>OK</span>
            </Link>
            <p className={styles.tagline}>
              El sistema de turnos online más simple para hacer crecer tu negocio.
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Producto</h4>
            <ul>
              <li><a href="#features">Beneficios</a></li>
              <li><a href="#pricing">Precios</a></li>
              <li><a href="#faq">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Columna 3: Legal (Placeholders) */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <ul>
              <li><Link href="/terminos">Términos y Condiciones</Link></li>
              <li><Link href="/privacidad">Política de Privacidad</Link></li>
            </ul>
          </div>

          {/* Columna 4: Accesos del SaaS */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Acceso</h4>
            <ul>
              <li>
                {/* Link externo a tu otra app */}
                <a href="https://app.agendaok.com.ar" target="_blank" rel="noopener noreferrer">
                  Iniciar Sesión
                </a>
              </li>
              <li>
                {/* Link nativo de email */}
                <a href="mailto:hola@agendaok.com.ar">hola@agendaok.com.ar</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior de Copyright */}
        <div className={styles.bottomBar}>
          <p>© {currentYear} AgendaOK. Todos los derechos reservados.</p>
          <p className={styles.hosting}>
            Hecho con ❤️ para emprendedores.
          </p>
        </div>
      </div>
    </footer>
  );
}