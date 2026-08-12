// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const resend = new Resend(process.env.RESEND_API_KEY);

// 🚦 Rate Limiting: máximo 5 envíos por hora por IP
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'),
});

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 letras'),
  email: z.string().email('El formato del email no es válido'),
  phone: z.string().min(8, 'El teléfono no es válido'),
  message: z.string().min(10, 'El mensaje debe ser más descriptivo'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 🍯 CAPA 1: HONEYPOT
    // Los bots rellenan todos los campos, incluido este que está oculto.
    // Los humanos nunca lo ven ni lo completan.
    if (body.website) {
      // Devolvemos "éxito" falso para que el bot no sepa que fue detectado
      return NextResponse.json({ success: true, message: 'Mensaje enviado correctamente' });
    }

    // 🚦 CAPA 2: RATE LIMITING POR IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
    const { success: rateLimitOk } = await ratelimit.limit(ip);

    if (!rateLimitOk) {
      return NextResponse.json(
        { success: false, message: 'Demasiados envíos. Por favor, intentá de nuevo en una hora.' },
        { status: 429 }
      );
    }

    // 1. Validar los datos entrantes
    const validatedData = contactSchema.parse(body);

    // 2. Enviar el correo usando Resend
    await resend.emails.send({
      from: 'AgendaOK Landing <contacto@morfis.com.ar>',
      to: ['hola@agendaok.com.ar'],
      replyTo: validatedData.email,
      subject: `🚀 Nuevo contacto de ${validatedData.name} - AgendaOK`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5E7EB; border-radius: 8px; padding: 24px;">
          <h2 style="color: #2563EB; margin-top: 0;">Nuevo mensaje desde la Landing Page</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Nombre:</td><td>${validatedData.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${validatedData.email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Teléfono:</td><td>${validatedData.phone}</td></tr>
          </table>
          <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E5E7EB;">
            <strong>Mensaje:</strong><br/>
            ${validatedData.message}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Mensaje enviado correctamente' });

  } catch (error) {
    // Error de validación de Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Datos inválidos. Revisá los campos del formulario.' },
        { status: 400 }
      );
    }

    console.error('Error al procesar el formulario:', error);
    return NextResponse.json(
      { success: false, message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.' },
      { status: 500 }
    );
  }
}