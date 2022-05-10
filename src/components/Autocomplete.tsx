import { Flex, Heading, List } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AutocompleteItem from './AutocompleteOption';

interface Props {
  data: any;
  setQuery: Function;
}

function episodes(data: any): any[] {
  return Object.assign(
    data?.episodesByEpisodeCode?.results ?? [],
    data?.episodesByName?.results ?? [],
  ).slice(0, 3) ?? [];
}

function characters(data: any): any[] {
  return data?.charactersByName?.results.slice(0, 3) ?? [];
}

function Autocomplete({ data, setQuery }: Props) {
  const episodeResults = episodes(data);
  const characterResults = characters(data);

  const resetQuery = () => {
    setQuery('');
  };

  if (!episodeResults.length && !characterResults.length) {
    return null;
  }

  return (
    <Flex direction="column" width="100%" position="absolute" backgroundColor="#FFF" border="1px solid #000" paddingBlock={5} paddingInline={15}>
      {episodeResults.length && (
        <Flex direction="column" color="#000">
          <Heading size="md" paddingBlockEnd={3}>Episodes</Heading>
          <List spacing={3} color="#000">
            {episodeResults.map((episode) => (
              <Link to={`/episodes/${episode.id}`} key={episode.id} onClick={resetQuery}>
                <AutocompleteItem
                  title={`${episode.episode} - ${episode.name}`}
                />
              </Link>
            ))}
          </List>
        </Flex>
      )}
      {characterResults.length && (
        <Flex direction="column" color="#000" paddingBlockStart={5}>
          <Heading size="md" paddingBlockEnd={3}>Characters</Heading>
          <List spacing={3} color="#000">
            {characterResults.map((character) => (
              <Link to={`/characters/${character.id}`} key={character.id} onClick={resetQuery}>
                <AutocompleteItem
                  title={`${character.name}`}
                  imageUrl={character.image}
                />
              </Link>
            ))}
          </List>
        </Flex>
      )}
    </Flex>
  );
}

export default Autocomplete;
