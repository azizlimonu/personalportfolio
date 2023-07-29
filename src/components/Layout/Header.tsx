import React, { useContext, useState } from 'react';
import useScrollNavbar from '@/hooks/useScrollNavbar';
import useTheme from '@/hooks/useTheme';
import styles from '@/styles/components/header.module.scss';
import { NAV_ITEMS } from '@/data/constant';
import { Link } from "react-scroll";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import ThemeContext from '@/context/ThemeContext';
import { GrClose } from 'react-icons/gr';

const Header = () => {
  const navbarVisible = useScrollNavbar();
  const theme = useTheme();
  const { toggleDark } = useContext(ThemeContext);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

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
          {/* display block expect mobile is hidden */}
          <div className={styles.menubar}>
            <button onClick={handleNav}>
              {mobileNavOpen ? <GrClose /> : <BiMenu />}
            </button>
          </div>
        </div>

        <div
          className={`${styles.nav} ${mobileNavOpen ? styles.shownav : ""}`}
        >
          <div className={styles.nav_wrapper}>
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

            <button className={styles.toggle} onClick={toggleDark}>
              {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
            </button>

          </div>
        </div>

      </div>
    </header>
  )
}

export default Header;