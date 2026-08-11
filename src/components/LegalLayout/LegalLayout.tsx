// src/components/LegalLayout/LegalLayout.tsx
import React from 'react';
import styles from './LegalLayout.module.css';

// Definimos qué "props" (propiedades) debe recibir este componente
interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode; // 'children' es el contenido HTML que envolverá
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <article className={styles.legalPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{title}</h1>
          <p className={styles.updated}>Última actualización: {lastUpdated}</p>
        </header>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </article>
  );
}