import { useGetProjectsQuery } from '../../shared/api/casesApi';
import ProjectCard from '../../shared/ui/ProjectCard/ProjectCard';
import styles from './projects.module.scss';
import Error from '../../shared/ui/Error/Error';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import ProjectSkeleton from '../../shared/ui/Skeletons/ProjectsSkeleton/ProjectsSkeleton';

const Projects = () => {
  const { data: projects = { items: [] }, isLoading, isError } = useGetProjectsQuery('');
  const activeCategory = useSelector((state: RootState) => state.activeCategory.category);

  const filteredProjects = activeCategory
    ? projects.items.filter(project => project.categories.some(category => category.name === activeCategory))
    : projects.items;

  const renderProjects = () => {
    if (isLoading) {
      return Array.from({ length: 6 }).map((_, index) => (
        <li key={index}>
          <ProjectSkeleton />
        </li>
      ));
    }

    if (isError) {
      return <Error />;
    }

    return filteredProjects.map(project => (
      <li key={project.id}>
        <ProjectCard url={project.image} title={project.title} description={project.description} />
      </li>
    ));
  };

  return <ul className={styles.project_list}>{renderProjects()}</ul>;
};

export default Projects;
