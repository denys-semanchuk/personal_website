import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import EmailTemplate from '@/components/email-templates/contact-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { email, message } = req.body;
    
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'semanchukdenys@gmail.com',
      subject: 'Buildbydenys.com contact form',
      react: EmailTemplate({ from: email, text: message }),
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ success: false, error: (error as Error).message });
  }
}