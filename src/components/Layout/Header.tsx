import React, { useContext } from 'react';
import useScrollNavbar from '@/hooks/useScrollNavbar';
import useTheme from '@/hooks/useTheme';
import styles from '@/styles/components/header.module.scss';
import { NAV_ITEMS } from '@/data/constant';
import { Link } from "react-scroll";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import ThemeContext from '@/context/ThemeContext';

const Header = () => {
  const navbarVisible = useScrollNavbar();
  const theme = useTheme();
  const { toggleDark } = useContext(ThemeContext);

  return (
    <header
      className={`${styles[theme]} ${navbarVisible ? styles.visible : styles.hidden} ${styles.navbar} `}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            className={styles.logo_link}
          >
            AL
          </Link>
        </div>

        <nav className={styles.nav}>
          {NAV_ITEMS?.map((item, i) => (
            <Link
              key={i}
              to={item.page}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              className={styles.link}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button className={styles.toggle} onClick={toggleDark}>
          {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
    </header>
  )
}

export default Header;