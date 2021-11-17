import { useQuery } from 'react-query';
import RepositoriesList from '../components/RepositoriesList';

const Index = () => {
  const { data, isLoading, error }: any = useQuery('users', () => {
    return fetch('https://api.github.com/users').then(res => res.json());
  });
  return (
    <>
      <div style={{ display: 'flex' }}>
        <h1>Hello Next.js</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ul>
            {data.map((user: any) => (
              <li key={user.id}>
                <p>{user.id}</p>
              </li>
            ))}
          </ul>
        )}

        <RepositoriesList />
      </div>
    </>
  );
};

export default Index;
