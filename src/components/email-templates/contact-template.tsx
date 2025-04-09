import * as React from 'react';
import { Html, Body, Container, Section, Heading, Text, Hr, Link } from "@react-email/components";

interface EmailProps {
    from: string;
    text: string
}

export function EmailTemplate(props: EmailProps) {
  const { from, text } = props;
  
  return (
    <Html lang="en">
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Heading as="h1" style={styles.heading}>New Contact Form Message</Heading>
          </Section>
          
          <Section style={styles.content}>
            <Text style={styles.label}>From:</Text>
            <Text style={styles.value}>{from}</Text>
            
            <Hr style={styles.divider} />
            
            <Text style={styles.label}>Message:</Text>
            <Text style={styles.messageBox}>{text}</Text>
          </Section>
          
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              This email was sent from your website contact form at {new Date().toLocaleDateString()}
            </Text>
            <Link href="https://buildbydenys.com" style={styles.link}>buildbydenys.com</Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles object for better organization
const styles = {
  body: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#f6f9fc',
    margin: '0',
    padding: '0',
  },
  container: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  },
  header: {
    backgroundColor: '#4f46e5',
    padding: '24px',
    textAlign: 'center' as const,
  },
  heading: {
    color: '#ffffff',
    fontSize: '24px',
    margin: '0',
    fontWeight: '600',
  },
  content: {
    padding: '24px 32px',
  },
  label: {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '4px',
    fontWeight: '500',
  },
  value: {
    fontSize: '16px',
    color: '#1e293b',
    marginBottom: '24px',
  },
  divider: {
    borderColor: '#e2e8f0',
    margin: '16px 0',
  },
  messageBox: {
    fontSize: '16px',
    color: '#1e293b',
    backgroundColor: '#f8fafc',
    padding: '16px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    whiteSpace: 'pre-wrap' as const,
    wordBreak: 'break-word' as const,
  },
  footer: {
    backgroundColor: '#f1f5f9',
    padding: '16px 24px',
    textAlign: 'center' as const,
  },
  footerText: {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '8px',
  },
  link: {
    color: '#4f46e5',
    fontSize: '14px',
    textDecoration: 'none',
  }
};

export default EmailTemplate;