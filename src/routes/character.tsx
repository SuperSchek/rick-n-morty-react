import { useQuery } from '@apollo/client';
import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { CHARACTER_BY_ID_QUERY } from '../../queries';

function Character() {
  const { characterId: id } = useParams<'characterId'>();
  const { loading, data } = useQuery(CHARACTER_BY_ID_QUERY, {
    variables: { id },
  });
  const character = data?.character;

  return (
    <>
      {loading && (
        <Flex align="center" justifyContent="center" height="calc(100vh - 70px)">
          <Spinner />
        </Flex>
      )}
      {!loading && (
        <>
          <Heading marginBlockEnd={5}>{character.name}</Heading>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>{`Cool stats about ${character.name}`}</TableCaption>
              <Tbody>
                <Tr>
                  <Td>Name</Td>
                  <Td>{character.name}</Td>
                </Tr>
                <Tr>
                  <Td>Status</Td>
                  <Td>{character.status}</Td>
                </Tr>
                <Tr>
                  <Td>Species</Td>
                  <Td>{character.species}</Td>
                </Tr>
                {character.type && (
                  <Tr>
                    <Td>Type</Td>
                    <Td>{character.type}</Td>
                  </Tr>
                )}
                <Tr>
                  <Td>Gender</Td>
                  <Td>{character.gender}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Heading size="lg" marginBlockStart={10} marginBlockEnd={5}>{`${character.name} is in these episodes:`}</Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Episode</Th>
                  <Th>Name</Th>
                </Tr>
              </Thead>
              <Tbody>
                {character?.episode?.map((episode: any) => (
                  <Tr key={episode.id}>
                    <Td>
                      <Link to={`/episodes/${episode.id}`}>{episode.episode}</Link>
                    </Td>
                    <Td>
                      <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}

export default Character;
