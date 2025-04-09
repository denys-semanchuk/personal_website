import { Resend } from "resend";

export const sendEmail = async (
  template: React.ReactNode
) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "semanchukdenys@gmail.com",
    subject: "Buildbydenys.com contact form",
    text: '',
    react: template,
  });

  if (error) {
    throw error;
  }

  return data;
};
