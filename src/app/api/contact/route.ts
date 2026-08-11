// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Inicializamos Resend con la API Key que estará en las variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

// Definimos el esquema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 letras'),
  email: z.string().email('El formato del email no es válido'),
  phone: z.string().min(8, 'El teléfono no es válido'),
  message: z.string().min(10, 'El mensaje debe ser más descriptivo'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Validar los datos entrantes
    const validatedData = contactSchema.parse(body);
    
    // 2. Enviar el correo usando Resend
    await resend.emails.send({
      from: 'AgendaOK Landing <contacto@morfis.com.ar>', 
      // ⚠️ IMPORTANTE: Cambiar 'onboarding@resend.dev' por 'hola@agendaok.com.ar'
      // una vez que configures el dominio en Resend (Fase 2 del roadmap).
      
      to: ['alojorge13@gmail.com'],
      replyTo: validatedData.email, // Para que al darle "Responder" llegue al cliente
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
    console.error('Error al procesar el formulario:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.' 
    }, { status: 500 });
  }
}