import { gql } from '@apollo/client';

export const EPISODES = gql`
  query {
    episodes {
      results {
        name,
        air_date
      }
    }
  }
`;