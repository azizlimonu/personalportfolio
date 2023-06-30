import React from 'react';
import styles from '@/styles/components/projects.module.scss';
import useTheme from '@/hooks/useTheme';
import { PROJECTS } from '@/data/constant';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const Projects = () => {
  const theme = useTheme();

  return (
    <section id="projects" className={`${styles[theme]} container`}>
      <div className={styles.projects}>
        <h1 className={styles.title}>PROJECTS</h1>
        <div className={styles.container}>
          {PROJECTS?.map((project, idx) => (
            <React.Fragment key={idx}>
              <div key={idx} className={styles.card}>
                <div className={styles.image}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                  />
                </div>
                <div className={styles.description}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className={styles.tags}>
                    {project.techStack.map((tag, idx) => (
                      <div className={styles.tags_item} key={idx}>
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className={styles.toolbar}>
                    <Link href={project.github}>
                      <BsGithub size={28} />
                    </Link>
                    <Link href={project.link}>
                      <BsArrowUpRightSquare size={28} />
                    </Link>
                  </div>
                </div>
              </div>
              {PROJECTS[PROJECTS.length - 1] !== project && (
                <hr className={styles.line} key={project.name} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section >
  )
}

export default Projects