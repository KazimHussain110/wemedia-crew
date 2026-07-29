import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { notificationEmail } from '../../../components/emails/notification-email';
import { confirmationEmail } from '../../../components/emails/confirmation-email';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  fullName: z.string().min(1, 'Name is required'),
  companyName: z.string().min(1, 'Company name is required'),
  email: z.string().email('Please provide a valid email address'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Project type is required'),
  projectLocation: z.string().min(1, 'Project location is required'),
  description: z.string().min(1, 'Message is required'),
  hearAboutUs: z.string().optional(),
});

type ContactData = z.infer<typeof contactSchema>;

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const data: ContactData = contactSchema.parse(body);

    const from = `WeMediaCrew <${process.env.FROM_EMAIL}>`;

    await Promise.all([
      resend.emails.send({
        from,
        to: process.env.MARKETING_EMAIL!,
        subject: `New Contact Form Submission - ${data.fullName}`,
        html: notificationEmail(data),
      }),
      resend.emails.send({
        from,
        to: data.email,
        subject: 'Thank you for contacting WeMediaCrew',
        html: confirmationEmail(data.fullName),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 },
      );
    }

    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again later.' },
      { status: 500 },
    );
  }
}
