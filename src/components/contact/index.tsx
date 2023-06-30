import React from 'react'
import styles from '@/styles/components/contact.module.scss';
import useTheme from '@/hooks/useTheme';

const message = {
  subHeader: "I do receive your messages and will respond asap if the valid email is provided",
  title: "Contact Me",
  header: "Get In Touch"
};


const Contact = () => {
  const theme = useTheme();

  return (
    <section id="contact" className={`${styles[theme]} container`}>
      <div className={styles.contact}>
        <div className={styles.contact_title}>
          <p>{message.header}</p>
          <p>{message.subHeader}</p>
          <h2>{message.title}</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.desc}>
            <h1>Hello this is from contact</h1>
          </div>

          <div className={styles.form}>
            <h1>Hello this is form</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact