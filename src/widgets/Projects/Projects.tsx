import { useGetProjectsQuery } from '../../shared/api/casesApi';
import ProjectCard from '../../shared/ui/ProjectCard/ProjectCard';
import styles from './projects.module.scss';
import { Project } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';

const Projects = () => {
  const { data: projects = { items: [] } } = useGetProjectsQuery('');
  const activeCategory = useSelector(
    (state: RootState) => state.activeCategory.category,
  );

  const categoryFiltering = () => {
    if (activeCategory) {
      return projects.items.filter(project =>
        project.categories.some(category => category.name === activeCategory),
      );
    }
    return projects.items;
  };

  const selectCategory = categoryFiltering();

  return (
    <ul className={styles.project_list}>
      {selectCategory.map((project: Project) => (
        <li key={project.id}>
          <ProjectCard url={project.image} title={project.title} />
        </li>
      ))}
    </ul>
  );
};

export default Projects;
