import React from 'react';
import styles from '@/styles/components/hero.module.scss';
import Image from 'next/image';
import useTheme from '@/hooks/useTheme';
import { FiArrowUpRight } from 'react-icons/fi';
import { BiLogoGithub } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import Link from 'next/link';

const heroData = {
  intro: "Hello, my name is",
  name: "Aziz Limonu",
  description: "a Fullstack Developer fueled by Tech Enthusiasm and a Lifelong Learning Journey",
}

const Hero = () => {
  const theme = useTheme();

  return (
    <section
      id='hero'
      className={`${styles[theme]} container`}
      style={{ paddingTop: "70px" }}
    >
      <div className={styles.hero}>
        <div className={styles.hero_description}>
          {/* flex column */}
          <p className={styles.subheader}>{heroData.intro}</p>
          <h1 className={styles.header}>{heroData.name}</h1>
          <p className={styles.description}>{heroData.description}</p>

          <button className={styles.resume} onClick={() => { }}>
            <p>See My Resume</p>
            <FiArrowUpRight />
          </button>

          <div className={styles.toolbar}>
            <Link href="https://www.linkedin.com">
              <FaLinkedin />
            </Link>
            <Link href="https://www.linkedin.com">
              <BiLogoGithub />
            </Link>
            <Link href="https://www.linkedin.com">
              <GrInstagram />
            </Link>
          </div>
        </div>

        <div className={styles.hero_image}>
          <Image
            src='/hero.jpg'
            alt='hero'
            width={450}
            height={550}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;