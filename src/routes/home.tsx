import { useState, useMemo } from 'react';
import { Input } from '@chakra-ui/react';
import throttle from 'lodash.throttle';
import { useQuery } from '@apollo/client';
import { EPISODES } from '../../queries';

function Home() {
  const { loading, error, data } = useQuery(EPISODES);
  const [query, setQuery] = useState('');
  // const handleChange = ({ target: { value } }: { target: { value: string } }) => {
  //   throttle(() => {
  //     setQuery(value);
  //   }, 500);
  // };

  const handleChange = throttle(({ target: { value } }: { target: { value: string } }) => {
    setQuery(value);
  }, 1000);

  useMemo(() => {
    console.log(query);
  }, [query]);

  return (
    <>
      <Input
        placeholder="Find episodes or characters..."
        onChange={handleChange}
      />
      {query}
      <pre>{JSON.stringify(loading)}</pre>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
}

export default Home;
