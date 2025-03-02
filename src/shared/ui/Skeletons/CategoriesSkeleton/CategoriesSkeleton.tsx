
import ContentLoader from 'react-content-loader';

const CategoriesSkeleton = props => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100%'}
    viewBox="0 0 300 40"
    backgroundColor="#323341"
    foregroundColor="#45475b"
    {...props}
  >
    <rect x="11" y="0" rx="11" ry="11" width="95%" height="100%" />
  </ContentLoader>
);

export default CategoriesSkeleton;
