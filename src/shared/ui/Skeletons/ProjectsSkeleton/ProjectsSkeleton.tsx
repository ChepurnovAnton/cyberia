import ContentLoader from 'react-content-loader';

const ProjectSkeleton = props => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={387}
    viewBox="0 0 387 387"
    backgroundColor="#323341"
    foregroundColor="#45475b"
    {...props}
  >
    <rect x="1" y="0" rx="5" ry="10" width="387" height="387" />
  </ContentLoader>
);

export default ProjectSkeleton;
