import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import useTheme from '@/hooks/useTheme'
import styles from '../../styles/pages/jobdetails.module.scss'
import Slider from '../slider'

interface Props {
  project: IProjectItem,
  loading: boolean
}

const ProjectDetails = ({ project, loading }: Props) => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <div
        className={`${styles[theme]}`}
        style={{ minHeight: "100vh", minWidth: "100%" }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.project}>
            <h1 className={styles.project_name}>
              {project.name}
            </h1>

            <Slider images={project.images} />

            <div className={styles.project_tags}>
              <h2>Tech Stacks</h2>
              <div className={styles.project_tags_tag}>
                {project.techStack?.map((tag, idx) => (
                  <p key={idx}>{tag}</p>
                ))}
              </div>
            </div>

            <div className={styles.project_libs}>
              <h2>Libraries & Technologies</h2>
              <div className={styles.project_libs_lib}>
                {project.library?.map((lib, idx) => (
                  <p key={idx}>
                    <span>{idx + 1}.{" "}</span>
                    {lib}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.project_feats}>
              <h2>Features Of The Project</h2>
              <div className={styles.project_feats_feat}>
                {project.features?.map((feat, idx) => (
                  <p key={idx}>
                    <span>{idx + 1}.{" "}</span>
                    {feat}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default ProjectDetails