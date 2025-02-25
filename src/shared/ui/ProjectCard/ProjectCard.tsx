import IconProjectCard from '../../icons/IconProjectCard';
import styles from './projectCard.module.scss';
import { ProjectCardProps } from './types';

const ProjectCard: React.FC<ProjectCardProps> = ({ url, title }) => {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={url} alt={title} />
      <div className={styles.title_block}>
        <h2 className={styles.text}>{title}</h2>
        <IconProjectCard
          style={{ position: 'absolute', top: '-5px', right: '-5px' }}
        />
      </div>
    </article>
  );
};

export default ProjectCard;
