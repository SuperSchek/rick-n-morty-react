import { useState, useMemo } from 'react';
import { Container, Input } from '@chakra-ui/react';
import throttle from 'lodash.throttle';
import { useQuery } from '@apollo/client';
import { SEARCH_QUERY } from '../../queries';
import Autocomplete from './Autocomplete';
// import ErrorAlert from './ErrorAlert';

function Searchbar() {
  const [query, setQuery] = useState('');
  /**
   * Apollo aparently throws 404 errors whenever a query has no results.
   * This makes error handling a bit difficult. For now I opted to skip it.
   *
   * I did build a small component to handle errors in the FE. You can still find it
   * commented out in the code of this component.
   */
  const { data, refetch } = useQuery(SEARCH_QUERY, {
    variables: { searchQuery: query },
    skip: !query,
  });

  const handleChange = throttle(({ target: { value } }: { target: { value: string } }) => {
    setQuery(value);
  }, 1000);

  useMemo(() => {
    refetch();
  }, [query]);

  return (
    <>
      {/* {error && (
        <ErrorAlert
          title="Oops!"
          description="There was a problem fetching the search results"
        />
      )} */}
      <Container position="relative">
        <Input
          placeholder="Search Rick &amp; Morty episodes or characters..."
          onChange={handleChange}
        />
        <Autocomplete data={data} setQuery={setQuery} />
      </Container>
    </>
  );
}

export default Searchbar;
