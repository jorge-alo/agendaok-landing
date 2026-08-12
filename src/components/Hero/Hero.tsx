// src/components/Hero/Hero.tsx
import FadeIn from '../FadeIn/FadeIn';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <FadeIn>
          <h1 className={styles.title}>
            Tu negocio con turnos online en <span className={styles.highlight}>5 minutos.</span>
          </h1>
        </FadeIn>

        <FadeIn>
          <p className={styles.subtitle}>
            Reservas 24/7, cobro de señas automático y recordatorios por WhatsApp.
            Dejá de perder tiempo coordinando y empezá a cobrar.
          </p>
        </FadeIn>

        <FadeIn>
          <div className={styles.ctaGroup}>
            <a href="#pricing" className={styles.btnPrimary}>
              Probar 30 días gratis
            </a>
            <a href="#features" className={styles.btnSecondary}>
              Ver cómo funciona
            </a>
          </div>
        </FadeIn>

        <FadeIn>
          <div className={styles.mockupSection}>
            {/* Desktop */}
            <div className={styles.desktopMockup}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
                <div className={styles.browserUrl}>app.agendaok.com.ar</div>
              </div>
              <img
                src="/images/panel-desktop.png"
                alt="Panel de administración de AgendaOK"
                className={styles.desktopScreenshot}
              />
            </div>

            {/* Mobile */}
            <div className={styles.mobileMockup}>
              <img
                src="/images/booking-mobile.png"
                alt="Página de reservas de AgendaOK en celular"
                className={styles.mobileScreenshot}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}