import { useGetProjectsQuery } from '../../shared/api/casesApi';
import ProjectCard from '../../shared/ui/ProjectCard/ProjectCard';
import styles from './projects.module.scss'

const Projects = () => {
  const { data: projects } = useGetProjectsQuery(null);

  return (
    <ul className={styles.project_list}>
      {projects?.items.map(project => (
        <li key={project.id}>
          <ProjectCard url={project.image} title={project.title} />
        </li>
      ))}
    </ul>
  );
};

export default Projects;
