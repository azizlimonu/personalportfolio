import React, { useState } from "react";
import { validationSchema } from "@/utils/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ToastContainer, toast } from "react-toastify";
import styles from '@/styles/components/formcontact.module.scss';
import useTheme from "@/hooks/useTheme";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  const handleSubmit = async (values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    try {
      setIsLoading(true);
      // Send email using Nodemailer
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      // Reset the form
      resetForm();
      // Show success message or redirect to a thank you page
      console.log("Email sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Failed to send email:", error);
      toast.error("Failed to send email");
    } finally {
      setSubmitting(false);
      toast.success("Email Have Been Sent!");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          subject: ""
        }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        <Form className={styles[theme]}>
          <div className={styles.wrapper}>
            <div className={styles.container}>

              <div className={styles.box}>
                <div className={styles.field}>
                  <label>Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ErrorMessage className={styles.error} name="name" component="div" />
                </div>

                <div className={styles.field}>
                  <label>Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ErrorMessage className={styles.error} name="email" component="div" />
                </div>
              </div>

              <div className={styles.box}>
                <div className={styles.field}>
                  <label>Subject</label>
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Your Subject e.g Hiring"
                  />
                  <ErrorMessage className={styles.error}  name="subject" component="div" />
                </div>
              </div>

              <div className={styles.box}>
                <div className={styles.field}>
                  <label>Message</label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    placeholder="Enter Your Message..."
                  />
                  <ErrorMessage className={styles.error} name="message" component="div" />
                </div>
              </div>

              <div className={styles.button}>
                <button
                  disabled={isLoading}
                >
                  Send Now 
                </button>
              </div>

            </div>
          </div>
        </Form>

      </Formik>


    </>
  );
};

export default ContactForm;