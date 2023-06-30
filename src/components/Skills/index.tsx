import useTheme from '@/hooks/useTheme'
import React, { useState } from 'react'
import styles from '@/styles/components/skills.module.scss'
import { skills } from '@/data/icons';
import { IconType } from 'react-icons';

const Skills = () => {
  const theme = useTheme();
  const [activeSkill, setActiveSkill] = useState(0);
  const { technologies } = skills[activeSkill]

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
        <div className={styles.skills_set}>
          {technologies.map((item, idx) => {
            const IconComponent: IconType = item.icon;

            const iconStyles: React.CSSProperties = {
              color: item.fillColor,
            };

            return (
              <div key={idx} className={styles.skills_set_item}>
                <IconComponent size={70} style={iconStyles} className={styles.icon} />
                <p>{item.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills