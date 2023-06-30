import useTheme from '@/hooks/useTheme'
import React, { useState } from 'react'
import styles from '@/styles/components/skills.module.scss'

const Skills = () => {
  const theme = useTheme();
  const [activeSkill, setActiveSkill] = useState(0);


  return (
    <section id="skills" className={`${styles[theme]} container`}>
      <div className={styles.skills}>
        <div>
          {/* Map through the skill set */}
        </div>
        <div className={styles.skillset}>
          {/* Map the skillset according to the skills */}
        </div>
      </div>
    </section>
  )
}

export default Skills