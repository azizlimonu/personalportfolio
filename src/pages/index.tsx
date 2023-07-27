import { useContext } from 'react'
import CustomHead from '@/components/CustomHead'

import ThemeContext from '@/context/ThemeContext'
import useTheme from '@/hooks/useTheme'
import Header from '@/components/Layout/Header'
import styles from '@/styles/pages/home.module.scss'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/contact';
import Footer from '@/components/Layout/Footer'

export default function Home() {
  const theme = useTheme();
  const { toggleDark } = useContext(ThemeContext);
  return (
    <>
      <CustomHead
        title="Aziz Limonu"
        description="Aziz Limonu personal portfolio"
        url={`http://localhost:3000`}
        image="/landing.png"
      />
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer/>
    </>
  )
}
