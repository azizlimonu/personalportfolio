import React from 'react'
import styles from '@/styles/components/contact.module.scss';
import useTheme from '@/hooks/useTheme';
import ContactForm from './ContactForm';
import Image from 'next/image';

const message = {
  subHeader: "I do receive your messages and will respond asap if the valid email is provided",
  title: "CONTACT",
  header: "Get In Touch"
};


const Contact = () => {
  const theme = useTheme();

  return (
    <section id="contact" className={`${styles[theme]} container`}>
      <div className={styles.contact}>
        <div className={styles.contact_title}>
          <h1>{message.title}</h1>
        </div>

        <div className={styles.container}>
          <div className={styles.desc}>
            <Image 
            src="/images/email.webp"
            alt="Email"
            width={500}
            height={500}
            />
          </div>
          <div className={styles.form}>
            <h3>{message.header}</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact