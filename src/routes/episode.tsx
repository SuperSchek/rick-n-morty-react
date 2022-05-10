import { useQuery } from '@apollo/client';
import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { EPISODE_BY_ID_QUERY } from '../../queries';

function Episode() {
  const { episodeId: id } = useParams<'episodeId'>();
  const { loading, data } = useQuery(EPISODE_BY_ID_QUERY, {
    variables: { id },
  });
  const episode = data?.episode;

  return (
    <>
      {loading && (
        <Flex align="center" justifyContent="center" height="calc(100vh - 70px)">
          <Spinner />
        </Flex>
      )}
      {!loading && (
        <>
          <Heading>{`${episode?.episode} - ${episode?.name}`}</Heading>
          <Text>{`Aired: ${episode?.air_date}`}</Text>

          <Heading size="lg" marginBlockStart={10} marginBlockEnd={5}>Characters in this episode</Heading>
          <Grid templateColumns="repeat(10, 1fr)">
            {episode?.characters?.map((character: any) => ( // TODO: Define interface
              <GridItem key={character.id}>
                <Link to={`/characters/${character.id}`}>
                  <Flex direction="column" align="center" justifyContent="center" marginBlockEnd={3} textAlign="center">
                    <Avatar size="xl" name={character.name} src={character.image} marginBlockEnd={3} />
                    <Heading size="sm">{character.name}</Heading>
                  </Flex>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}

export default Episode;
