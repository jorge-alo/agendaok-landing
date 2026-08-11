// src/app/privacidad/page.tsx
import LegalLayout from '@/components/LegalLayout/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | AgendaOK',
  description: 'Política de privacidad y tratamiento de datos personales en AgendaOK.',
};

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="10 de Agosto de 2026">
      <p>
        En AgendaOK, la privacidad de tus datos y los de tus clientes es nuestra prioridad. 
        Esta política explica qué información recopilamos, cómo la usamos y cómo la protegemos.
      </p>

      <h2>1. Información que Recopilamos</h2>
      <p>Recopilamos información que nos proporcionás directamente al crear una cuenta:</p>
      <ul>
        <li>Nombre, dirección de correo electrónico y número de teléfono.</li>
        <li>Información de tu negocio (nombre, dirección, servicios ofrecidos).</li>
        <li>Datos de tus clientes necesarios para la gestión de turnos (nombres, teléfonos, emails).</li>
      </ul>

      <h2>2. Cómo Usamos tu Información</h2>
      <p>
        Utilizamos la información para proporcionar, mantener y mejorar nuestros servicios, 
        procesar transacciones, enviar recordatorios automáticos de turnos (vía WhatsApp o Email) 
        y brindarte soporte técnico.
      </p>

      <h2>3. Compartir Información</h2>
      <p>
        <strong>No vendemos</strong> tus datos personales ni los de tus clientes a terceros. 
        Solo compartimos información con proveedores de servicios de confianza que nos ayudan a 
        operar nuestra plataforma (como servicios de hosting en la nube y envío de mensajes), 
        y quienes están obligados a mantener la confidencialidad de tus datos.
      </p>

      <h2>4. Seguridad de los Datos</h2>
      <p>
        Implementamos medidas de seguridad técnicas y organizativas estándar en la industria 
        para proteger tu información contra acceso no autorizado, alteración o destrucción.
      </p>

      <h2>5. Tus Derechos</h2>
      <p>
        Tenés derecho a acceder, actualizar o eliminar tu información personal en cualquier momento 
        desde tu panel de control o contactando a nuestro equipo de soporte.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Para cualquier consulta relacionada con la privacidad de tus datos, escribinos a{' '}
        <a href="mailto:hola@agendaok.com.ar">hola@agendaok.com.ar</a>.
      </p>
    </LegalLayout>
  );
}