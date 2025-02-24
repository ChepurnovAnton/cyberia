import styles from './projectCard.module.scss'
import { ProjectCardProps } from './types'


const ProjectCard: React.FC<ProjectCardProps> = ({url, title}) => {
  return (
    <article className={styles.card} >
      <img className={styles.image} src={url} alt={title}  />
      {/* <h2>{title}</h2> */}
    </article>
  )
}

export default ProjectCard