// src/app/terminos/page.tsx
import LegalLayout from '@/components/LegalLayout/LegalLayout';
import { Metadata } from 'next';

// SEO: Configuramos el título específico para esta página
export const metadata: Metadata = {
  title: 'Términos y Condiciones | AgendaOK',
  description: 'Términos y condiciones de uso del sistema de turnos online AgendaOK.',
};

export default function TerminosPage() {
  return (
    <LegalLayout title="Términos y Condiciones" lastUpdated="10 de Agosto de 2026">
      <p>
        Bienvenido a AgendaOK. Al acceder y utilizar nuestro sitio web y plataforma de gestión de turnos, 
        aceptás cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con alguna parte 
        de estos términos, no podés utilizar nuestro servicio.
      </p>

      <h2>1. Descripción del Servicio</h2>
      <p>
        AgendaOK es una plataforma SaaS (Software as a Service) que permite a negocios de servicios 
        gestionar sus turnos, clientes y empleados de manera online. Ofrecemos herramientas para reservas, 
        recordatorios automáticos y cobro de señas.
      </p>

      <h2>2. Prueba Gratuita y Suscripciones</h2>
      <p>
        Ofrecemos un período de prueba de 30 días sin costo y sin requerir tarjeta de crédito. 
        Finalizado este período, para continuar utilizando el servicio deberás suscribirte al plan mensual 
        vigente (actualmente $15.000 ARS/mes). Nos reservamos el derecho de modificar los precios, 
        notificando a los usuarios con al menos 30 días de antelación.
      </p>

      <h2>3. Responsabilidades del Usuario</h2>
      <p>
        Al crear una cuenta, sos responsable de mantener la confidencialidad de tu contraseña y de todas 
        las actividades que ocurran bajo tu cuenta. Te comprometés a no utilizar el servicio para fines 
        ilegales o no autorizados.
      </p>

      <h2>4. Cancelación del Servicio</h2>
      <p>
        Podés cancelar tu suscripción en cualquier momento desde el panel de administración. 
        La cancelación será efectiva al final del ciclo de facturación actual, y no se realizarán 
        reembolsos proporcionales por días no utilizados.
      </p>

      <h2>5. Limitación de Responsabilidad</h2>
      <p>
        AgendaOK se provee "tal cual". No garantizamos que el servicio será ininterrumpido o libre de errores. 
        En ningún caso AgendaOK será responsable por daños indirectos, incidentales o consecuentes derivados 
        del uso de la plataforma.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Si tenés alguna pregunta sobre estos Términos, podés contactarnos a{' '}
        <a href="mailto:hola@agendaok.com.ar">hola@agendaok.com.ar</a>.
      </p>
    </LegalLayout>
  );
}