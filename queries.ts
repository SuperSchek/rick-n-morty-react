import { gql } from '@apollo/client';

/**
 * This query is kinda weird.
 * Without access to the server to write a resolver and
 * limited time this was the best I could do.
 */
export const SEARCH_QUERY = gql`
  query SearchQuery($searchQuery: String) {
    charactersByName: characters(filter: { name: $searchQuery }) {
      results {
        id,
        name,
        image
      }
    }
    episodesByEpisodeCode: episodes(filter: { episode: $searchQuery }) {
      results {
        id,
        name,
        episode
      }
    }
    episodesByName: episodes(filter: { name: $searchQuery }) {
      results {
        id,
        name,
        episode
      }
    }
  }
`;

export const CHARACTER_BY_ID_QUERY = gql`
  query characterById($id: ID!) {
    character(id: $id) {
      name,
      image,
      species,
      status,
      type,
      gender,
      episode {
        episode,
        name,
        id,
      }
    }
  }
`;

export const EPISODE_BY_ID_QUERY = gql`
  query episodeById($id: ID!) {
    episode(id: $id) {
      air_date,
      episode,
      name,
      characters {
        name,
        id,
        image
      }
    }
  }
`;
