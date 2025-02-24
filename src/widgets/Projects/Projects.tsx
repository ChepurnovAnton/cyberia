import { useGetProjectsQuery } from '../../shared/api/casesApi';
import ProjectCard from '../../shared/ui/ProjectCard/ProjectCard';
import styles from './projects.module.scss';
import { Project } from './types';


const Projects = () => {
  const { data: projects } = useGetProjectsQuery('');

  return (
    <ul className={styles.project_list}>
      {projects?.items.map((project: Project) => (
        <li key={project.id}>
          <ProjectCard url={project.image} title={project.title} />
        </li>
      ))}
    </ul>
  );
};

export default Projects;
