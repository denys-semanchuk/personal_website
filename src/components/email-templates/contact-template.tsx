import * as React from 'react';
import { Html } from "@react-email/components";

interface EmailProps {
    from: string;
    text: string
}
export function EmailTemplate(props: EmailProps) {

  return (
    <Html lang="en">
        <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
            <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
            <h1 style={{ color: '#333' }}>New Contact Form Submission</h1>
            <p style={{ color: '#555' }}><strong>From:</strong> {props.from}</p>
            <p style={{ color: '#555' }}><strong>Message:</strong> {props.text}</p>
            </div>
        </body>
    </Html>
  );
}

export default EmailTemplate;