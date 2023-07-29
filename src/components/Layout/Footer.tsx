import React from 'react'
import styles from '@/styles/components/footer.module.scss'
import useTheme from '@/hooks/useTheme'
import Link from 'next/link';
import { BiLogoGithub } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  const theme = useTheme();

  return (
    <div className={`${styles[theme]} container`}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <Link href="https://www.linkedin.com">
            <FaLinkedin />
          </Link>
          <Link href="https://www.github.com/azizlimonu">
            <BiLogoGithub />
          </Link>
          <Link href="https://www.instagram.com/azizlimonu">
            <GrInstagram />
          </Link>
        </div>

        <div>
          <p>
            © 2023 Aziz Limonu
          </p>
        </div>

        <Link href="mailto:azizlimonu@gmail.com">
          <p>azizlimonu@gmail.com</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer