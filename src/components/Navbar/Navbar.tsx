// src/components/Navbar/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* El logo usa Link de Next.js para recargar la página si hacen clic */}
        <Link href="/" className={styles.logo}>
          Agenda<span>OK</span>
        </Link>
        
        <ul className={styles.navLinks}>
          <li><a href="#features">Beneficios</a></li>
          <li><a href="#pricing">Precio</a></li>
          <li><a href="#faq">Preguntas</a></li>
          <li>
            <a href="#contact" className={styles.ctaButton}>
              Probar Gratis
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}