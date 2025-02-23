import styles from './projectCard.module.scss'
const ProjectCard = ({url, title}) => {
  return (
    <article className={styles.card} >
      <img className={styles.image} src={url} alt={title}  />
      {/* <h2>{title}</h2> */}
    </article>
  )
}

export default ProjectCard