import useTheme from '@/hooks/useTheme'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/skills.module.scss'
import { skills } from '@/data/icons';
import { IconType } from 'react-icons';

const Skills = () => {
  const theme = useTheme();
  const [activeSkill, setActiveSkill] = useState(0);
  const { technologies } = skills[activeSkill];

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 768); // Mobile: 0 to 767 (inclusive)
      setIsTablet(windowWidth >= 769 && windowWidth <= 1024); // Tablet: 769 to 1024 (inclusive)
    };

    // Initial check on component mount
    handleResize();

    // Listen to window resize event
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="skills" className={`${styles[theme]} container`}>
      <h1 className={styles.title}>SKILLS</h1>
      <div className={styles.skills}>
        <div className={styles.skills_category}>
          {skills.map(({ category }, idx) => (
            <button
              onClick={() => setActiveSkill(idx)}
              key={idx}
              data-skill={category}
              data-skill-index={idx}
              className={`${activeSkill === idx ? `${styles.active}` : ""}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className={styles.skills_wrap}>
          <div className={styles.skills_wrap_set}>
            {technologies.map((item, idx) => {
              const IconComponent: IconType = item.icon;

              const iconStyles: React.CSSProperties = {
                color: item.fillColor,
              };
              // 40,32,70
              return (
                <div
                  key={idx}
                  className={styles.skills_wrap_set_item}
                >
                  <IconComponent
                    size={isTablet ? 60 : isMobile ? 50 : 70}
                    style={iconStyles}
                    className={styles.icon}
                  />
                  <p>{item.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills