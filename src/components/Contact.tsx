import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactValidators } from "@/services/validators/contact-validators";

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-primary/5"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-text-light mb-8">
            Have a question or want to work together?
          </p>

          {status === 'success' ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              <p>Message sent successfully! I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <Formik
              initialValues={{ email: "", message: "" }}
              validationSchema={contactValidators}
              onSubmit={async (values, { resetForm }) => {
                try {
                  setStatus('loading');
                  const response = await fetch('/api/send-mail', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                  });
                  
                  const data = await response.json();
                  
                  if (data.success) {
                    setStatus('success');
                    resetForm();
                  } else {
                    setStatus('error');
                    console.error('Failed to send email:', data.error);
                  }
                } catch (error) {
                  setStatus('error');
                  console.error('Error sending email:', error);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="px-4 py-2 rounded-full bg-background/50 border border-primary/10 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm text-left" />
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Your message"
                    rows={3}
                    className="px-4 py-2 rounded-2xl bg-background/50 border border-primary/10 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm text-left" />
                  
                  {status === 'error' && (
                    <div className="text-red-500 text-sm">
                      Something went wrong. Please try again later.
                    </div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || status === 'loading'}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`bg-gradient-to-r from-primary to-primary-dark text-white py-2 px-6 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 ${
                      (isSubmitting || status === 'loading') ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </Form>
              )}
            </Formik>
          )}
        </motion.div>
      </div>
    </section>
  );
};